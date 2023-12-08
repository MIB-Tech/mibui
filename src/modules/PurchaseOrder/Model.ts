import {AbstractModel, CreateTimestampModel, HydraItem} from '../types.ts';
import {CurrencyModel, HydraCurrencyModel} from '../Currency';
import {HydraVendorModel, VendorModel} from '../Vendor';


type Model = {
  orderNumber: string
  isTaxIncluded: boolean
  ref?: string
  externalRef?: string
  desiredDeliveryDate: string
  budget: number
  currency: CurrencyModel
  vendor: VendorModel
} & AbstractModel & CreateTimestampModel

export type HydraModel = HydraItem<{
  currency: HydraCurrencyModel
  vendor: HydraVendorModel
} & Omit<Model, 'currency' | 'vendor'>>

export default Model;