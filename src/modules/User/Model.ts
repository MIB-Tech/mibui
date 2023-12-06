import {AbstractModel, TimestampModel} from '../types.ts';

type Model = {
  username: string
  firstName: string
  lastName: string
  email?: string
  password: string
  role?: AbstractModel
  receptionManagerDraftOrders?: Array<AbstractModel>
} & AbstractModel & TimestampModel

export default Model