import { Auth } from './auth.interface'

export interface IUser extends Auth {
  name: string
  description: string
}
