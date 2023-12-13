import {AbstractModel, HydraItem} from '../types.ts';
import {AbstractProduct, PurchaseOrderProduct} from '../../pages/ApplicationUI/FormLayout/Examples/types.ts';

type Model = {
  address: string
  status: string
  quantity: number
  purchaseOrderProduct: PurchaseOrderProduct
} & AbstractModel & AbstractProduct

export type HydraModel = HydraItem<Model>

export default Model;