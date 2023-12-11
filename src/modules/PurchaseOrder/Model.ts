import {AbstractModel, CreateTimestampModel, HydraItem} from '../types.ts';
import {CurrencyModel, HydraCurrencyModel} from '../Currency';
import {HydraVendorModel, VendorModel} from '../Vendor';
import {HydraPurchaseOrderProductModel, PurchaseOrderProductModel} from '../PurchaseOrderProduct';


type Model = {
  orderNumber: string
  isTaxIncluded: boolean
  ref?: string
  externalRef?: string
  desiredDeliveryDate: string
  budget: number
  currency: CurrencyModel
  vendor: VendorModel
  purchaseOrderProducts: Array<PurchaseOrderProductModel>
} & AbstractModel & CreateTimestampModel

export type HydraModel = HydraItem<{
  currency: HydraCurrencyModel
  vendor: HydraVendorModel
  purchaseOrderProducts: Array<HydraPurchaseOrderProductModel>
} & Omit<Model, 'currency' | 'vendor' | 'purchaseOrderProducts'>>

export default Model;