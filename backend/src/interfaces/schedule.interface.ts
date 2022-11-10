import { IEvent } from './event.interface'
import { IMeeting } from './meeting.interface'
import { IRestaurant } from './restaurant.interface'
import { ITransfer } from './transfer.interface'

export interface ISchedule {
  date: string
  fullDayMeetings: IMeeting[]
  morningMeetings: IMeeting[]
  morningEvents: IEvent[]
  afternoonMeetings: IMeeting[]
  afternoonEvents: IEvent[]
  lunch: IRestaurant[]
  dinner: IRestaurant[]
  transfer_in: ITransfer[]
  transfer_out: ITransfer[]
}
