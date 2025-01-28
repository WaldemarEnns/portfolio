import postmark from 'postmark'

export default defineEventHandler(async (event) => {
  const { fromMail, senderName, message, privacyPolicyAgreed } = await readBody(event)

  if (!privacyPolicyAgreed) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
    })
  }

  if (!fromMail || !senderName || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
    })
  }

  const config = useRuntimeConfig(event)
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