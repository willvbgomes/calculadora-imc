import { BMIContext } from '@/contexts/bmi-provider'
import { useContext } from 'react'

export const useBMIContext = () => {
  const context = useContext(BMIContext)

  if (!context) {
    throw new Error('BMIContext must be used within a BMIProvider')
  }

  return context
}
