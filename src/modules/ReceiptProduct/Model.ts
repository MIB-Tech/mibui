import {AbstractModel, HydraItem} from '../types.ts';
import {AbstractProduct} from '../../pages/ApplicationUI/FormLayout/Examples/types.ts';
import {HydraProductModel} from '../Product';
import {HydraDiscountModel} from '../Discount';
import {DesiredProductModel} from '../DesiredProduct';
import {ReceiptModel} from '../Receipt';

type Model = {
  quantity: number
  address: string
  desiredProduct?: DesiredProductModel
  receipt: ReceiptModel
} & AbstractModel & AbstractProduct

export type HydraModel = {
  desiredProduct?: HydraProductModel
  receipt: HydraDiscountModel
} & Omit<HydraItem<Model>, 'desiredProduct' | 'receipt'>

export default Model;