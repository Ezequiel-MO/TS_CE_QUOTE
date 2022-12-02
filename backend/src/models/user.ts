import { Schema, model } from 'mongoose'
import { IUser } from '../interfaces/user.interface'

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      default: 'I am a new user'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const UserModel = model<IUser>('users', UserSchema)
export default UserModel
