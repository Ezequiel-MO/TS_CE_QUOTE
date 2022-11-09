import { Schema, model } from 'mongoose'
import { IHotel } from '../interfaces/hotel.interface'

const hotelSchema = new Schema<IHotel>(
  {
    name: {
      type: String,
      required: [true, 'Hotels must have a name'],
      minlength: [5, 'A Hotel name must have more than 4 characters'],
      unique: true,
      trim: true
    },
    city: String,
    address: String,
    numberStars: {
      type: Number,
      min: [1, 'Rating must be 1 or above 1'],
      max: [5, 'Rating must be 5 or lower']
    },
    numberRooms: Number,
    checkin_out: String,
    meetingRooms: String,
    wheelChairAccessible: Boolean,
    wifiSpeed: String,
    swimmingPool: String,
    restaurants: String,
    textContent: [String],
    imageContentUrl: [String],
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
    price: [
      {
        DUInr: Number,
        DUIprice: Number,
        DoubleRoomNr: Number,
        DoubleRoomPrice: Number,
        breakfast: Number,
        DailyTax: Number
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

hotelSchema.methods.setImgUrl = function (files: any[]) {
  const arrImgUrl: any[] = []
  files.forEach((el) => arrImgUrl.push(el.location))
  this.imageContentUrl = arrImgUrl
}

/* hotelSchema.index({ city: 1, numberStars: -1 }); */

const Hotel = model<IHotel>('Hotels', hotelSchema)

export { Hotel, hotelSchema }
