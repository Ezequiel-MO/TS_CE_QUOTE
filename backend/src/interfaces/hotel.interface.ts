import { ILocation } from './location.interface'

type HotelPrice = {
  DUInr: number
  DUIprice: number
  DoubleRoomNr: number
  DoubleRoomPrice: number
  breakfast: number
  DailyTax: number
}

export interface IHotel {
  name: string
  city: string
  address: string
  numberStars: number
  numberRooms: number
  checkin_out: string
  meetingRooms: String
  wheelChairAccessible: boolean
  wifiSpeed: string
  swimmingPool: string
  restaurants: string
  textContent: string[]
  imageContentUrl: string[]
  location: ILocation
  introduction: string[]
  price: HotelPrice[]
}
