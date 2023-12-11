import {AbstractModel, HydraItem} from '../types.ts';

export enum DiscountType {
  Percent = 'PERCENT',
  Amount = 'AMOUNT',
}

type Model = {
  discountType: DiscountType
  value: number
} & AbstractModel

export type HydraModel = HydraItem<Model>

export default Model;