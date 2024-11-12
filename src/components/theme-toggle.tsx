import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/bmi-theme'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      className="absolute right-8 top-8 h-8 w-12 rounded-full"
      variant="outline"
      onClick={changeTheme}
    >
      <div className="absolute h-6 w-6 -translate-x-1/3 rounded-full bg-primary/80 dark:translate-x-1/3">
        <Sun className="absolute left-1 top-1 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute left-1 top-1 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </div>
    </Button>
  )
}
