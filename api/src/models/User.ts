import mongoose, { Document, Schema } from 'mongoose'

export type UserDocument = Document & {
  fullName: string,
  internalRate: number,
}

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  internalRate: {
    type: Number,
    required: true,
  },
})

export default mongoose.model<UserDocument>('User', userSchema)
