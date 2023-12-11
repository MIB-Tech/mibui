import {FormValue} from './Page.types.ts';
import {array, boolean, number, object, ObjectSchema, string} from 'yup';
import moment from 'moment';

export const initialValues: FormValue = {
  budget: 0,
  createdAt: moment().format(),
  desiredDeliveryDate: '',
  currency: null,
  externalRef: '',
  isTaxIncluded: false,
  ref: '',
  vendor: null,
  purchaseOrderProducts: [],
};

const relation = () => object().shape({
  id: number().required(),
  '@id': string().required(),
  '@title': string().required(),
  '@subTitle': string().required(),
});

export const validationSchema: ObjectSchema<FormValue> = object().shape({
  budget: number().required(),
  createdAt: string().required(),
  desiredDeliveryDate: string().required(),
  currency: relation(),
  externalRef: string().required(),
  isTaxIncluded: boolean().required(),
  ref: string().required(),
  vendor: relation().required(),
  purchaseOrderProducts: array().required(),
});