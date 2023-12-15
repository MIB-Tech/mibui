import {AbstractModel, HydraItem} from '../types.ts';
import {HydraReceiptProductModel, ReceiptProductModel} from '../ReceiptProduct';
import {HydraPurchaseOrderModel, PurchaseOrderModel} from '../PurchaseOrder';


type Model = {
  receiptNumber: string
  externalRef?: string
  receivedAt?: string | null
  purchaseOrder?: PurchaseOrderModel
  receiptProducts: Array<ReceiptProductModel>
} & AbstractModel

export type HydraModel = HydraItem<{
  purchaseOrder?: HydraPurchaseOrderModel
  receiptProducts: Array<HydraReceiptProductModel>
} & Omit<Model, 'purchaseOrder' | 'receiptProducts'>>

export default Model;


// export type ReceiptPrint =
//   {
//     taxType: 'HT' | 'TTC'
//     currency: Pick<CurrencyModel, 'code'>
//     vendor: {
//       phoneNumber: string
//       address: string
//       postalCode: number
//     } & Pick<VendorModel, 'name'>
//     receiptProducts: Array<{
//       discount: Pick<DiscountModel, 'value' | 'discountType'>
//       product: Pick<ProductModel, 'code'>
//     } & Pick<ReceiptProductModel, 'designation' | 'quantity' | 'grossPrice' | 'netPrice' | 'vatRate' | 'grossTotalExclTax'>>
//   }
//   & Pick<Model, 'receiptNumber' | 'createdAt' | 'ref' | 'externalRef' | 'receivedAt' | 'grossTotalExclTax' | 'totalVatTax' | 'totalInclTax'>

// const EXAMPLE: ReceiptPrint = {
//   grossTotalExclTax: 0,
//   totalInclTax: 0,
//   totalVatTax: 0,
//   receiptNumber: '',
//   createdAt: '01/11/2023',
//   currency: {
//     code: 'MAD'
//   },
//   receivedAt: '05/11/2023',
//   externalRef: '',
//   ref: '',
//   taxType: 'HT',
//   vendor: {
//     name: 'MERI',
//     address: 'Adresse 1',
//     cityName: 'Casa',
//     postalCode: 12345,
//     phoneNumber: '+2126966998855'
//   },
//   receiptProducts: [
//     {
//       product: {
//         code: 'P01',
//       },
//       designation: 'Product 1',
//       quantity: 1,
//       grossTotalExclTax: 0,
//       vatRate: 10,
//       grossPrice: 0,
//       netPrice: 0,
//       discount: {
//         discountType: DiscountType.Amount,
//         value: 0
//       }
//     },
//     {
//       product: {
//         code: 'P02',
//       },
//       designation: 'Product 2',
//       quantity: 1,
//       grossTotalExclTax: 0,
//       vatRate: 10,
//       grossPrice: 0,
//       netPrice: 0,
//       discount: {
//         discountType: DiscountType.Amount,
//         value: 0
//       }
//     }
//   ]
// };