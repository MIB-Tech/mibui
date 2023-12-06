import {HydraUserModel, UserModel} from '../../../modules';

export type FormValue = Pick<UserModel, 'username' | 'password'>
export type AuthState = {
  user: HydraUserModel
  token: string,
  refreshToken: string
}