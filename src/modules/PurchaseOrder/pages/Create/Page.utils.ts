import {FormValue, PurchaseOrderProductFormValue} from './Page.types.ts';
import {array, boolean, number, object, string} from 'yup';
import moment from 'moment';
import {DiscountType} from '../../../Discount/Model.ts';

export const initialValues: FormValue = {
  orderNumber: '',
  createdAt: moment().format(),
  desiredDeliveryDate: null,
  currency: null,
  ref: '',
  externalRef: '',
  isTaxIncluded: false,
  vendor: null,
  purchaseOrderProducts: [],
};

const relation = () => object().shape({
  id: number().required()
});

export const validationSchema/*: ObjectSchema<FormValue>*/ = object().shape({
  createdAt: string().required(),
  desiredDeliveryDate: string().nullable(),
  currency: relation(),
  ref: string().nullable(),
  externalRef: string().nullable(),
  isTaxIncluded: boolean().required(),
  vendor: relation().required(),
  purchaseOrderProducts: array().min(1).required(),
});
export const getInitPurchaseOrderProduct: (init?: Partial<PurchaseOrderProductFormValue>) => PurchaseOrderProductFormValue = (initialState) => {
  const designation = initialState?.product?.['@title'] || '';
  const buyer = initialState?.buyer ? {
    id: initialState.buyer.id,
    '@id': initialState.buyer['@id'],
    '@title': initialState.buyer['@title'],
    '@subTitle': initialState.buyer['@subTitle'],
  } : null;

  return {
    discount: {
      value: 0,
      discountType: DiscountType.Amount
    },
    designation,
    grossPrice: 0,
    netPrice: 0,
    note: '',
    product: null,
    quantity: 0,
    vatRate: 0,
    desiredProducts: [
      {
        designation,
        quantity: 0,
        address: '',
        status: ''
      }
    ],
    ...initialState,
    buyer: buyer
  };
};