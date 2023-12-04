import {RouteEnum} from '../../@types/Route.ts';
import {RouteObject} from 'react-router/dist/lib/context';
import {InputPage} from './Input';
import {InputNumberPage} from './InputNumber';
import {InputPasswordPage} from './InputPassword';
import {InputGroupPage} from './InputGroup';
import {SelectPage} from './Select';
import {AutocompletePage} from './Autocomplete';
import DatePage from './DatePicker/DatePage.tsx';
import DateRangePage from './DatePicker/DateRangePage.tsx';
import DateMultiplePage from './DatePicker/DateMultiplePage.tsx';
import {SliderPage} from './Slider';
import {SwitchPage} from './Switch/index.ts';
import {CheckboxPage} from './Checkbox';
import {FormControlPage} from './FormControl';

const ROUTES: RouteObject = {
  id: RouteEnum.Form,
  path: 'form',
  children: [
    {
      id: RouteEnum.FormInput,
      path: 'input',
      element: <InputPage/>,
      index: true
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
      id: RouteEnum.FormFormControl,
      path: 'form-group',
      element: <FormControlPage/>
    },
    {
      id: RouteEnum.ComponentsCheckbox,
      path: 'checkbox',
      element: <CheckboxPage/>
    },
    {
      id: RouteEnum.FormDatePicker,
      path: 'date-picker',
      // element: <Navigate to='single'/>,
      children: [
        {
          id: RouteEnum.FormDatePickerSingle,
          path: 'single',
          element: <DatePage/>
        },
        {
          id: RouteEnum.FormDatePickerRange,
          path: 'range',
          element: <DateRangePage/>
        },
        {
          id: RouteEnum.FormDatePickerMultiple,
          path: 'multiple',
          element: <DateMultiplePage/>
        }
      ]
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
    },
    {
      id: RouteEnum.FormSlider,
      path: 'slider',
      element: <SliderPage/>
    },
  ]
};


export default ROUTES;