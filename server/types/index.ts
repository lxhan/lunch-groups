import { Document } from 'mongoose'

export interface IPerson extends Document {
  name: string
}
