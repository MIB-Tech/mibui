import {AbstractModel} from '../../../../modules';

const ME = {
  id: 1,
  firstName: 'Abderrahmane',
  lastName: 'Elfannir',
};
const PRODUCT_1 = {
  id: 1,
  code: 'PRD0001',
  designation: 'Product 1'
};

export enum DiscountType {
  Percent = 'PERCENT',
  Amount = 'AMOUNT',
}


type Discount = {
  discountType: DiscountType
  value: number
}
export type AbstractProduct = {
  designation: string
}
type Product = {
  code: string
} & AbstractModel & AbstractProduct
type User = {
  firstName: string
  lastName: string
} & AbstractModel
export type PurchaseOrderProduct = {
  quantity: number
  grossPrice: number
  netPrice: number
  vatRate: number
  note?: string
  mntCompte: number
  mntTransaction: number
  //
  product?: Product
  discount?: Discount
  buyer: User
} & AbstractModel & AbstractProduct
export const PURCHASE_ORDER_PRODUCT_1 = {
  id: 1,
  designation: 'Product 1',
  quantity: 10,
  grossPrice: 3,
  netPrice: 11,
  vatRate: 20,
  note: '',
  mntCompte: 100,
  mntTransaction: 200,
  discount: {
    discountType: DiscountType.Percent,
    value: 5
  },
  buyer: ME,
  product: PRODUCT_1
};
export const PURCHASE_ORDER_PRODUCT_2 = {
  id: 2,
  designation: 'Product 2',
  quantity: 15,
  grossPrice: 5,
  netPrice: 11,
  vatRate: 20,
  note: '',
  mntCompte: 100,
  mntTransaction: 200,
  discount: {
    discountType: DiscountType.Percent,
    value: 5
  },
  buyer: ME,
  product: PRODUCT_1,
};
export type DesiredProduct = {
  quantity: number
  address: string
  status: string
  purchaseOrderProduct: PurchaseOrderProduct
} & AbstractModel & AbstractProduct