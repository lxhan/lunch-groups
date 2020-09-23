import { model, Schema } from 'mongoose'
import { IPerson } from '../types'

const Person: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
)

export default model<IPerson>('Person', Person)
