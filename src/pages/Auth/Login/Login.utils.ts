import {FormValue} from './Login.types.ts';
import {object, ObjectSchema, string} from 'yup';

export const initialValues:FormValue = {
  username: import.meta.env.VITE_LOGIN_USERNAME,
  password: import.meta.env.VITE_LOGIN_PASSWORD,
}

export const validationSchema:ObjectSchema<FormValue> = object().shape({
  username: string().required(),
  password: string().required(),
})