import {RouteEnum} from '../../@types/Route.ts';
import {RouteObject} from 'react-router/dist/lib/context';
import {InputPage} from './Input';
import {InputNumberPage} from './InputNumber';
import {InputPasswordPage} from './InputPassword';
import {InputGroupPage} from './InputGroup';
import {SelectPage} from './Select';
import {AutocompletePage} from './Autocomplete';
import { SwitchPage } from './Switch/index.ts';

const ROUTES: RouteObject = {
  id: RouteEnum.Form,
  path: 'form',
  children: [
    {
      id: RouteEnum.FormInput,
      path: 'input',
      element: <InputPage/>
    },
    {
      id: RouteEnum.FormInputNumber,
      path: 'input-number',
      element: <InputNumberPage/>
    },
    {
      id: RouteEnum.FormInputPassword,
      path: 'input-password',
      element: <InputPasswordPage/>
    },
    {
      id: RouteEnum.FormSelect,
      path: 'select',
      element: <SelectPage/>
    },
    {
      id: RouteEnum.FormAutocomplete,
      path: 'autocomplete',
      element: <AutocompletePage/>
    },
    {
      id: RouteEnum.FormInputGroup,
      path: 'input-group',
      element: <InputGroupPage/>
    },
    {
      id: RouteEnum.FormSwitch,
      path: 'switch',
      element: <SwitchPage />
    }
  ]
};


export default ROUTES;