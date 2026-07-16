import { onMounted, ref } from 'vue'

const isDark = ref(false)

export function useTheme() {
  const applyTheme = (dark: boolean) => {
    isDark.value = dark
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  const toggleTheme = () => applyTheme(!isDark.value)

  onMounted(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    applyTheme(saved ? saved === 'dark' : prefersDark)
  })

  return { isDark, toggleTheme }
}
