import { ILocation } from './location.interface'
import { ITransfer } from './transfer.interface'

export interface IEvent {
  name: string
  city: string
  textContent: string[]
  imageContentUrl: string[]
  pricePerPerson: boolean
  price: number
  location: ILocation
  introduction: string[]
  transfer: ITransfer[]
}
