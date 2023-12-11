import Model from '../../Model.ts';
import {HydraItem} from '../../../types.ts';
import {DiscountModel} from '../../../Discount';
import {PurchaseOrderProductModel} from '../../../PurchaseOrderProduct';
import {DesiredProductModel} from '../../../DesiredProduct';

type Relationship = HydraItem
export type DesiredProductFormValue = Pick<DesiredProductModel, 'designation' | 'address' | 'status' | 'quantity'>

export type PurchaseOrderProductFormValue = {
  product: Relationship | null
  buyer: Relationship | null
  discount: Pick<DiscountModel, 'discountType' | 'value'> | null
  desiredProducts: Array<DesiredProductFormValue>
} & Pick<PurchaseOrderProductModel, 'designation' | 'quantity' | 'grossPrice' | 'netPrice' | 'note' | 'vatRate'>

export type FormValue =
  {
    vendor: Relationship | null
    currency: Relationship | null
    purchaseOrderProducts: Array<PurchaseOrderProductFormValue>
  }
  & Pick<Model, 'createdAt' | 'isTaxIncluded' | 'ref' | 'externalRef' | 'desiredDeliveryDate' | 'budget'>

