import { IHotel } from './hotel.interface'

export interface IMeeting {
  hotels: IHotel[]
  familyName: string
  email: string
  phone?: string
  country: string
  quoteLanguage: 'EN' | 'ES' | 'FR' | 'DE'
  clientCompany: string
}
