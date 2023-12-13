import {DiscountType} from "../../pages/ApplicationUI/FormLayout/Examples/types.ts";

export type PurchaseOrderPrint = {
  grossTotalExclTax: number;
  totalInclTax: number;
  totalVatTax: number;
  orderNumber: string;
  createdAt: string;
  currency: {
    code: string;
  };
  desiredDeliveryDate: string;
  externalRef: string;
  ref: string;
  taxType: string;
  vendor: {
    name: string;
    address: string;
    cityName: string;
    postalCode: number;
    phoneNumber: string;
  };
  purchaseOrderProducts: Array<{
    product: {
      code: string;
    };
    designation: string;
    quantity: number;
    grossTotalExclTax: number;
    vatRate: number;
    grossPrice: number;
    netPrice: number;
    discount: {
      discountType: DiscountType.Amount;
      value: number;
    };
  }>;
}

export const EXAMPLE: PurchaseOrderPrint = {
  grossTotalExclTax: 0,
  totalInclTax: 0,
  totalVatTax: 0,
  orderNumber: '',
  createdAt: '01/11/2023',
  currency: {
    code: 'MAD'
  },
  desiredDeliveryDate: '05/11/2023',
  externalRef: '',
  ref: '',
  taxType: 'HT',
  vendor: {
    name: 'MERI',
    address: 'Adresse 1',
    cityName: 'Casa',
    postalCode: 12345,
    phoneNumber: '+2126966998855'
  },
  purchaseOrderProducts: [
    {
      product: {
        code: 'P01',
      },
      designation: 'Product 1',
      quantity: 1,
      grossTotalExclTax: 0,
      vatRate: 10,
      grossPrice: 0,
      netPrice: 0,
      discount: {
        discountType: DiscountType.Amount,
        value: 0
      }
    },
    {
      product: {
        code: 'P02',
      },
      designation: 'Product 2',
      quantity: 1,
      grossTotalExclTax: 0,
      vatRate: 10,
      grossPrice: 0,
      netPrice: 0,
      discount: {
        discountType: DiscountType.Amount,
        value: 0
      }
    }
  ]
};
