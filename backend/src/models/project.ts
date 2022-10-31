import { Schema, model } from 'mongoose'
import { restaurantSchema } from './restaurant'
import { transferSchema } from './transfer'

const projectSchema = new Schema(
  {
    code: {
      type: String,
      required: [true, 'Projects must include a code'],
      unique: true,
      trim: true,
      maxlength: [
        15,
        'A Project Name must have less or equal than 15 characters'
      ],
      minlength: [10, 'A Project Name must have at least 10 characters']
    },
    accountManager: [{ type: Schema.Types.ObjectId, ref: 'AccManagers' }],
    groupName: String,
    groupLocation: String,
    arrivalDay: String,
    departureDay: String,
    nrPax: {
      type: Number,
      min: [0, 'Number of pax cannot be negative']
    },
    clientAccManager: [{ type: Schema.Types.ObjectId, ref: 'Clients' }],
    projectIntro: [String],
    /* hotels: [hotelSchema], */
    status: {
      type: String,
      default: 'Received',
      enum: ['Received', 'Sent', 'Confirmed', 'Cancelled', 'Invoiced']
    },
    estimate: Number,
    schedule: [
      {
        date: String,
        /* fullDayMeetings: [meetingSchema],
        morningMeetings: [meetingSchema], */
        /*  morningEvents: [eventSchema], */
        /*  afternoonMeetings: [meetingSchema], */
        /*   afternoonEvents: [eventSchema], */
        lunch: [restaurantSchema],
        dinner: [restaurantSchema],
        transfer_in: [transferSchema],
        transfer_out: [transferSchema]
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const Project = model('Projects', projectSchema)

export default Project
