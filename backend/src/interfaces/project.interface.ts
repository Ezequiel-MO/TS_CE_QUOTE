import { IAccManager } from './accManager.interface'
import { IClient } from './client.interface'
import { ICompanyFeatures } from './companyFeatures.interface'
import { IHotel } from './hotel.interface'
import { ISchedule } from './schedule.interface'

export interface IProject {
  code: string
  accountManager: IAccManager[]
  groupName: string
  groupLocation: string
  arrivalDay: string
  departureDay: string
  nrPax: number
  clientAccManager: IClient[]
  projectIntro: string[]
  hotels: IHotel[]
  status: string
  estimate: number
  corporateImage: ICompanyFeatures[]
  schedule: ISchedule[]
}
