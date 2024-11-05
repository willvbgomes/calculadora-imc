import { Control } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'

type FieldProps = {
  label: string
  placeholder: string
  control: Control<{
    weight: number
    height: number
  }>
}

export const Field = ({ control, label, placeholder }: FieldProps) => (
  <FormField
    control={control}
    name="weight"
    render={({ field }) => (
      <FormItem className="relative">
        <FormLabel className="mt-1.5 w-1/3">{label}:</FormLabel>
        <FormControl>
          <Input
            type="text"
            className="text-center"
            placeholder={placeholder}
            {...field}
          />
        </FormControl>
        <FormMessage className="absolute top-[90%]" />
      </FormItem>
    )}
  />
)
