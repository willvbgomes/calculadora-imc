import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { useBMIContext } from '@/hooks/bmi-context'

export const Result = () => {
  const { data } = useBMIContext()

  return (
    <>
      {data ? (
        <Table>
          <TableHeader>
            <TableRow className="border-primary">
              <TableHead>Peso</TableHead>
              <TableHead>Altura</TableHead>
              <TableHead>IMC</TableHead>
              <TableHead>Descrição</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-xs sm:text-sm">
            <TableRow>
              <TableCell>{data?.weight}</TableCell>
              <TableCell>{data?.height}</TableCell>
              <TableCell>
                {Number(data?.result).toLocaleString('pt-br', {
                  minimumFractionDigits: 2,
                })}
              </TableCell>
              <TableCell>{data?.classification}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ) : (
        <span className="flex h-full w-full items-center justify-center rounded-md bg-primary/10">
          Preencha os dados para o cálculo do IMC
        </span>
      )}
    </>
  )
}
