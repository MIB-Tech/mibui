import {AbstractModel, CreateTimestampModel, HydraItem} from '../types.ts';
import {CurrencyModel, HydraCurrencyModel} from '../Currency';
import {HydraVendorModel, VendorModel} from '../Vendor';
import {HydraPurchaseOrderProductModel, PurchaseOrderProductModel} from '../PurchaseOrderProduct';


type Model = {
  orderNumber: string
  isTaxIncluded: boolean
  ref?: string
  externalRef?: string
  desiredDeliveryDate?: string | null
  currency: CurrencyModel
  vendor: VendorModel
  purchaseOrderProducts: Array<PurchaseOrderProductModel>
  readonly grossTotalExclTax: number
  readonly totalVatTax: number
  readonly totalInclTax: number
} & AbstractModel & CreateTimestampModel

export type HydraModel = HydraItem<{
  currency: HydraCurrencyModel
  vendor: HydraVendorModel
  purchaseOrderProducts: Array<HydraPurchaseOrderProductModel>
} & Omit<Model, 'currency' | 'vendor' | 'purchaseOrderProducts'>>

export default Model;


// type PurchaseOrderPrint = {
//   taxType: 'HT' | 'TTC'
//   currency: Pick<CurrencyModel, 'code'>
//   vendor: {
//     phoneNumber: string
//     address: string
//     postalCode: number
//   } & Pick<VendorModel, 'name'>
//   purchaseOrderProducts: Array<{
//     discount: Pick<DiscountModel, 'value' | 'discountType'>
//     product: Pick<ProductModel, 'code'>
//   } & Pick<PurchaseOrderProductModel, 'designation' | 'quantity' | 'grossPrice' | 'netPrice' | 'vatRate' | 'grossTotalExclTax'>>
// } & Pick<Model, 'orderNumber' | 'createdAt' | 'ref' | 'externalRef' | 'desiredDeliveryDate' | 'grossTotalExclTax' | 'totalVatTax' | 'totalInclTax'>

// const EXAMPLE: PurchaseOrderPrint = {
//   grossTotalExclTax: 0,
//   totalInclTax: 0,
//   totalVatTax: 0,
//   orderNumber: '',
//   createdAt: '01/11/2023',
//   currency: {
//     code: 'MAD'
//   },
//   desiredDeliveryDate: '05/11/2023',
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
//   purchaseOrderProducts: [
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