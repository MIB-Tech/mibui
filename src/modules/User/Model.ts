import {AbstractModel, HydraItem, TimestampModel} from '../types.ts';

type Model = {
  username: string
  firstName: string
  lastName: string
  email?: string
  password: string
  role?: AbstractModel
  readonly roles: Array<string>
  receptionManagerDraftOrders?: Array<AbstractModel>
} & AbstractModel & TimestampModel

export type HydraModel = HydraItem<{
  role?: HydraItem<AbstractModel>
  receptionManagerDraftOrders?: Array<HydraItem<AbstractModel>>
} & Model>

export default Model