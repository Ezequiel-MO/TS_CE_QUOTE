import { ILocation } from './location.interface'
import { ITransfer } from './transfer.interface'

type TVENUE_PRICE = {
  rental: number
  cocktail_units: number
  cocktail_price: number
  catering_units: number
  catering_price: number
  staff_units: number
  staff_menu_price: number
  audiovisuals: number
  cleaning: number
  security: number
  entertainment: number
}

export interface IRestaurant {
  name: string
  city: string
  textContent: string[]
  imageContentUrl: string[]
  price: number
  location: ILocation
  introduction: string[]
  isVenue: boolean
  venue_price: TVENUE_PRICE[]
  transfer: ITransfer[]
}
