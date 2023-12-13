import {AbstractModel, HydraItem} from '../types.ts';
import {AbstractProduct} from '../../pages/ApplicationUI/FormLayout/Examples/types.ts';
import {HydraUserModel, UserModel} from '../User';
import {HydraProductModel, ProductModel} from '../Product';
import {DiscountModel, HydraDiscountModel} from '../Discount';
import {DesiredProductModel, HydraDesiredProductModel} from '../DesiredProduct';

type Model = {
  code: string,
  quantity: number
  grossPrice: number
  netPrice: number
  vatRate: number
  note?: string
  product?: ProductModel
  discount?: DiscountModel
  buyer: UserModel
  desiredProducts: Array<DesiredProductModel>
  readonly grossTotalExclTax: number
  readonly netTotalExclTax: number
  readonly vatTax: number
} & AbstractModel & AbstractProduct

export type HydraModel = {
  product?: HydraProductModel
  discount?: HydraDiscountModel
  buyer: HydraUserModel
  desiredProducts: Array<HydraDesiredProductModel>
} & Omit<HydraItem<Model>, 'product' | 'discount' | 'buyer' | 'desiredProducts'>

export default Model;