import {FormValue} from './Page.types.ts';
import {boolean, number, object, ObjectSchema, string} from 'yup';
import moment from 'moment';

export const initialValues: FormValue = {
  budget: 0,
  createdAt: moment().format(),
  desiredDeliveryDate: '',
  currency: null,
  externalRef: '',
  isTaxIncluded: false,
  ref: '',
  vendor: null
};

const relation = () => object().shape({id: number().required(), '@title': string().required()});

export const validationSchema: ObjectSchema<FormValue> = object().shape({
  budget: number().required(),
  createdAt: string().required(),
  desiredDeliveryDate: string().required(),
  currency: relation(),
  externalRef: string().required(),
  isTaxIncluded: boolean().required(),
  ref: string().required(),
  vendor: relation().required()
});