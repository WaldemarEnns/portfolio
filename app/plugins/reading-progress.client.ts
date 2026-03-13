export default defineNuxtPlugin(() => {
  const updateReadingProgress = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    
    const progressBar = document.getElementById('reading-progress')
    if (progressBar) {
      progressBar.style.width = scrollPercent + '%'
    }
  }

  // Update on scroll
  window.addEventListener('scroll', updateReadingProgress, { passive: true })
  
  // Initial update
  updateReadingProgress()
})
