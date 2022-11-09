import { Schema, model } from 'mongoose'
import { IEvent } from '../interfaces/event.interface'
import { transferSchema } from './transfer'

const eventSchema = new Schema<IEvent>(
  {
    name: {
      type: String,
      required: [true, 'An Event must have a name'],
      minlength: [5, 'An event name must have more than 4 characters'],
      unique: true,
      trim: true
    },
    city: String,
    textContent: [String],
    imageContentUrl: [String],
    pricePerPerson: {
      type: Boolean,
      default: true
    },
    price: {
      type: Number,
      required: [true, 'An Event must have aprice'],
      min: [0, 'A price must be 0 or positive']
    },
    location: {
      type: {
        type: String,
        default: 'Point',
        enum: ['Point']
      },
      coordinates: [Number],
      address: String,
      description: String
    },
    introduction: [String],
    transfer: [transferSchema]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

eventSchema.methods.setImgUrl = function (files: any[]) {
  const arrImgUrl: any[] = []
  files.forEach((el) => arrImgUrl.push(el.location))
  this.imageContentUrl = arrImgUrl
}

const Event = model<IEvent>('Events', eventSchema)

export { Event, eventSchema }
