/* import { Schema, model } from 'mongoose'
import { IMeeting } from '../interfaces/meeting'

const meetingSchema = new Schema<IMeeting>(
  {
    hotel: [{ type: Schema.Types.ObjectId, ref: 'Hotels' }],
    hotelName: String,
    roomCapacity: Number,
    HDRate: Number,
    FDRate: Number,
    HDDDR: Number,
    FDDDR: Number,
    coffeeBreakUnits: Number,
    coffeeBreakPrice: Number,
    workingLunchUnits: Number,
    workingLunchPrice: Number,
    aavvPackage: Number,
    hotelDinnerUnits: Number,
    hotelDinnerPrice: Number,
    imageContentUrl: [String],
    introduction: [String]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

meetingSchema.pre(/^find/, async function (next) {
  this.populate({
    path: 'hotel',
    select: '-__v -createdAt -updatedAt'
  })
  next()
})

meetingSchema.methods.setImgUrl = function (files: any[]) {
  const arrImgUrl: any[] = []
  files.forEach((el) => arrImgUrl.push(el.location))
  this.imageContentUrl = arrImgUrl
}

const Meeting = model('Meetings', meetingSchema)

export { Meeting, meetingSchema }
 */
