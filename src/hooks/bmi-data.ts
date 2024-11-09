import { useState } from 'react'

export type BMIDataProps = {
  weight: string
  height: string
  result?: string
  classification?: string
}

export const useBMI = () => {
  const [data, setData] = useState<BMIDataProps | null>(null)

  const calculateBMI = (weight: number, height: number) =>
    weight / ((height / 100) * (height / 100))

  const getClassification = (bmi: number): string => {
    if (bmi < 17) return 'Muito abaixo do peso'
    if (bmi < 18.5) return 'Abaixo do peso'
    if (bmi < 25) return 'Peso Normal'
    if (bmi < 30) return 'Acima do peso'
    if (bmi < 35) return 'Obesidade I'
    if (bmi < 40) return 'Obesidade II'

    return 'Obesidade III (mórbida)'
  }

  const getResult = (data: BMIDataProps) => {
    // const weight = `${Number(data.weight).toFixed(2)}Kg`
    const weight = `${Number(data.weight).toLocaleString('pt-br', { minimumFractionDigits: 2 })}Kg`
    const height = `${(Number(data.height) / 100).toLocaleString('pt-br', { minimumFractionDigits: 2 })}M`
    const result = calculateBMI(Number(data.weight), Number(data.height))
    const classification = getClassification(result)

    setData({ weight, height, result: result.toFixed(2), classification })
  }

  return {
    data,
    getResult,
    setData,
  }
}
