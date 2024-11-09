import { createContext, Dispatch, ReactNode } from 'react'
import { BMIDataProps, useBMI } from '@/hooks/bmi-data'

type ContextProps = {
  data: BMIDataProps | null
  getResult: (data: BMIDataProps) => void
  setData: Dispatch<React.SetStateAction<BMIDataProps | null>>
}

type BMIProps = {
  children: ReactNode
}

export const BMIContext = createContext<ContextProps | null>(null)

export const BMIProvider = ({ children }: BMIProps) => {
  const { data, getResult, setData } = useBMI()

  return (
    <BMIContext.Provider
      value={{
        data,
        getResult,
        setData,
      }}
    >
      {children}
    </BMIContext.Provider>
  )
}
