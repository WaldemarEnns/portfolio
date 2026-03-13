export interface UseScrollToReturn {
  scrollToContact: () => void
  scrollToAbout: () => void
  scrollToServices: () => void
  scrollToElement: (selector: string) => void
}

export function useScrollTo(): UseScrollToReturn {
  const scrollToElement = (selector: string) => {
    const element = document.querySelector(selector)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => scrollToElement('#contact')
  const scrollToAbout = () => scrollToElement('#about')
  const scrollToServices = () => scrollToElement('#services')

  return {
    scrollToContact,
    scrollToAbout,
    scrollToServices,
    scrollToElement,
  }
}
