import {
  BudgetContextProps,
  IMappedProject
} from '../../interfaces/project.interfaces'

import { createContext } from 'react'
export const BudgetContext = createContext({} as BudgetContextProps)
const { Provider } = BudgetContext

type BudgetProps = {
  project: IMappedProject | undefined
  children?: React.ReactNode | React.ReactNode[]
}

const Budget = ({ children, project }: BudgetProps) => {
  return (
    <Provider value={{ project }}>
      <div>{children}</div>
    </Provider>
  )
}

export default Budget
