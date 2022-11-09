import { IHotel } from './hotel.interface'

export interface IMeeting {
  hotel: IHotel[]
  hotelName: string
  roomCapacity: number
  HDRate: number
  FDRate: number
  HDDDR: number
  FDDDR: number
  coffeeBreakUnits: number
  coffeeBreakPrice: number
  workingLunchUnits: number
  workingLunchPrice: number
  aavvPackage: number
  hotelDinnerUnits: number
  hotelDinnerPrice: number
  imageContentUrl: string[]
  introduction: string[]
}
