import {RouteEnum} from '../../@types/Route.ts';
import {RouteObject} from 'react-router/dist/lib/context';
import {InputPage} from './Input';
import {InputNumberPage} from './InputNumber';
import {InputPasswordPage} from './InputPassword';
import {InputGroupPage} from './InputGroup';
import {TextareaPage} from './Textarea';
import {SelectPage} from './Select';

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
      id: RouteEnum.FormTextarea,
      path: 'textarea',
      element: <TextareaPage/>
    },
    {
      id: RouteEnum.FormSelect,
      path: 'select',
      element: <SelectPage/>
    },
    {
      id: RouteEnum.FormInputGroup,
      path: 'input-group',
      element: <InputGroupPage/>
    },
  ]
};


export default ROUTES;