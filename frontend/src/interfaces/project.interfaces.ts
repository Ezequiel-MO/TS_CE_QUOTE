export interface IProject {
  _id: string
  code: string
  nrPax: number
  schedule: IDay[]
}

export interface IDay {
  _id: string
  date: string
  transfer_in: ITransfer[]
}

export interface ITransfer {
  _id: string
  transfer_in: number
  meetGreet?: number
  assistance?: number
}

export interface IMappedProject {
  _id: string
  code: string
  nrPax: number
  date: string
  nrVehicles?: number
  transfer_in_service?: number
  transfer_in_meetGreet?: number
  transfer_in_assistance?: number
}

export interface BudgetContextProps {
  project: IMappedProject | undefined
}
