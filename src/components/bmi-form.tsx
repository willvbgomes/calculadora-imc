import { Field } from './field'
import { Form } from './ui/form'
import { Button } from './ui/button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useBMIContext } from '@/hooks/bmi-context'
import { MouseEvent } from 'react'

const formSchema = z.object({
  weight: z
    .string({
      errorMap: () => ({ message: 'Somente valores entre 20 e 300Kg' }),
    })
    .transform(value => value.replace(',', '.'))
    .pipe(
      z.coerce
        .number({
          errorMap: () => ({ message: 'Somente valores entre 20 e 300Kg' }),
        })
        .gte(20)
        .lte(300),
    )
    .pipe(z.coerce.string()),
  height: z.coerce
    .number({
      errorMap: () => ({ message: 'Somente valores entre 50 e 250cm' }),
    })
    .gte(50)
    .lte(250)
    .pipe(z.coerce.string()),
})

export const BMIForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      height: '',
      weight: '',
    },
  })

  const { reset } = form

  const { data, getResult, setData } = useBMIContext()

  const submitData = (formData: z.infer<typeof formSchema>) =>
    getResult(formData)

  const handleReset = (event: MouseEvent) => {
    event.preventDefault()
    setData(null)
    reset()
  }

  return (
    <Form {...form}>
      <form
        className="flex w-full max-w-xs flex-col gap-6 sm:max-w-sm"
        onSubmit={form.handleSubmit(submitData)}
      >
        <Field
          label="Peso (Kg)"
          name="weight"
          placeholder="ex: 65,700"
          control={form.control}
        />

        <Field
          label="Altura (cm)"
          name="height"
          placeholder="ex: 175"
          control={form.control}
        />

        {data ? (
          <Button
            variant={'secondary'}
            className="mt-4 w-fit self-center px-10"
            onClick={handleReset}
          >
            Refazer
          </Button>
        ) : (
          <Button className="mt-4 w-fit self-center px-10">Calcular</Button>
        )}
      </form>
    </Form>
  )
}
