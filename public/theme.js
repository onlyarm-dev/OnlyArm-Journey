// Apply the saved theme before Vue renders.
const savedTheme = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
document.documentElement.classList.toggle('dark', savedTheme ? savedTheme === 'dark' : prefersDark)
