import {UserModel} from '../../../modules';

export type FormValue = Pick<UserModel, 'username' | 'password'>
export type ResponseData = {
  token: string,
  refreshToken: string
}