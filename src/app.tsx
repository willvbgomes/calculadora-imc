import { BMIForm } from './components/bmi-form'
import { BMIProvider } from './contexts/bmi-provider'
import { Result } from './components/result'
import { ThemeProvider } from './contexts/theme-provider'
import { ThemeToggle } from './components/theme-toggle'

export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="bmi-theme">
      <main className="m-auto flex min-h-dvh max-w-xs flex-col items-center justify-center gap-8 sm:min-h-screen sm:max-w-sm">
        <ThemeToggle />

        <BMIProvider>
          <section className="w-full">
            <BMIForm />
          </section>

          <section className="flex h-28 w-full items-center">
            <Result />
          </section>
        </BMIProvider>
      </main>
    </ThemeProvider>
  )
}
