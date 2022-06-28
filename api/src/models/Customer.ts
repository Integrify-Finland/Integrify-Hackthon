import mongoose, { Document, Schema } from 'mongoose'

export type CustomerDocument = Document & {
  customerName: string
  project: string
  activity: string
  billable: string
  hourlyRate: number
  monthlyRate: number
}

const customerSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  project: {
    type: String,
  },
  activity: {
    type: String,
    required: true,
    default: 'Development',
  },
  billable: {
    type: String,
    required: true,
    default: 'Yes',
  },
  hourlyRate: {
    type: Number,
  },
  monthlyRate: {
    type: Number,
  },
})

export default mongoose.model<CustomerDocument>('Customer', customerSchema)
