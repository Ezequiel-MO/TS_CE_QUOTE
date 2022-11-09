import { Schema, model } from 'mongoose'
import { IDestination } from '../interfaces/destination.interface'

const locationSchema = new Schema<IDestination>(
  {
    name: {
      type: String,
      required: [true, 'Please enter a location name'],
      unique: true,
      trim: true
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
    textContent: [String],
    imageContentUrl: [String]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

locationSchema.methods.setImgUrl = function (files: any[]) {
  const arrImgUrl: any[] = []
  files.forEach((el) => arrImgUrl.push(el.location))
  this.imageContentUrl = arrImgUrl
}

const Location = model<IDestination>('Locations', locationSchema)

export { Location, locationSchema }
