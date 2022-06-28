import { timeStamp } from 'console'
import mongoose, { Document, Schema } from 'mongoose'

export type TimesheetDocument = Document & {
  date: Date,
  from: Date,
  to: Date,
  duration: Number,
  rate: Number,
  userName: string[],
  customerName: string[],
  exported: string,
}

const timesheetSchema = new mongoose.Schema({
  date: {
    type: Date,
    require: true,
    default: Date.now,
  },
  from: {
    type: Date,
    required: true,
  },
  to: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    require: true
  },
  rate: {
    type: Number,
    default: null,
  },
  userName: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  customerName: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    require: true,
  },
  exported: {
    type: String,
  },
});

export default mongoose.model<TimesheetDocument>('Timesheet', timesheetSchema)