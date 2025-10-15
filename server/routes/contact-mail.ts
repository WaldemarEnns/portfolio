import postmark from 'postmark'

export default defineEventHandler(async (event) => {
  const { fromMail, senderName, message, privacyPolicyAgreed, captchaToken } = await readBody(event)

  if (!privacyPolicyAgreed) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
    })
  }

  if (!fromMail || !senderName || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
    })
  }

  // Verify CAPTCHA token
  if (!captchaToken) {
    throw createError({
      statusCode: 400,
      statusMessage: 'CAPTCHA verification failed',
    })
  }

  const config = useRuntimeConfig(event)
  const secretKey = config.turnstile?.secretKey

  if (!secretKey) {
    throw new Error('Turnstile secret key is missing')
  }

  // Verify the token with Cloudflare Turnstile
  const verifyResponse = await $fetch<{ success: boolean }>('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: {
      secret: secretKey,
      response: captchaToken,
    },
  })

  if (!verifyResponse || !verifyResponse.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'CAPTCHA verification failed',
    })
  }

  const postmarkServerToken: string|undefined = config.postmarkServerToken

  if(!postmarkServerToken) {
    throw new Error('Postmark server token is missing')
  }

  const client = new postmark.ServerClient(postmarkServerToken)

  await client.sendEmailWithTemplate({
    From: "kontakt@waldemarenns.de",
    To: "kontakt@waldemarenns.de",
    TemplateAlias: "contact",
    TemplateModel: {
      sender_name: senderName,
      message,
      from_mail: fromMail,
    }
  })

  await client.sendEmailWithTemplate({
    From: "kontakt@waldemarenns.de",
    To: fromMail,
    TemplateAlias: "contact-response",
    TemplateModel: {
      sender_name: senderName,
      message
    }
  })
})
