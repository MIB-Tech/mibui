import Model from '../../Model.ts';
import {HydraItem} from '../../../types.ts';
import {ReceiptProductModel} from '../../../ReceiptProduct';

type Relationship = HydraItem

export type ReceiptProductFormValue = {
  desiredProduct?: Relationship | null
} & Pick<ReceiptProductModel, 'designation' | 'quantity' | 'address'>


export type PurchaseOrderFormValue = {
  purchaseOrder?: Relationship | null
  receiptProducts: Array<ReceiptProductFormValue>
} & Pick<Model, 'receiptNumber' | 'externalRef' | 'receivedAt'>
  & Partial<Pick<Model, 'id' | 'receiptNumber'>>

