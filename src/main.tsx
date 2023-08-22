import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {RouteEnum} from './@types/Route';
import App from './App.tsx';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {BadgePage, BreadcrumbPage, ButtonGroupPage, ButtonPage, CardPage, PaginationPage} from './pages/Components';
import {AlertPage} from './pages/Components/Alert';
import {SpinnerPage} from './pages/Components/Spinner';
import {DropdownPage} from './pages/Components/Dropdown';
import {InputGroupPage, InputNumberPage, InputPage} from './pages/Forms';
import {ModalPage} from './pages/Components/Modal';
import {InputPasswordPage} from './pages/Forms/InputPassword';
import {ToastPage} from './pages/Components/Toast';

enum Lang {
  English = 'en'
}

const resources: Record<Lang, { translation: Record<RouteEnum, string> }> = {
  [Lang.English]: {
    translation: {
      [RouteEnum.Home]: 'Home',
      [RouteEnum.Components]: 'Components',
      [RouteEnum.ComponentsButton]: 'Button',
      [RouteEnum.ComponentsAlert]: 'Alert',
      [RouteEnum.ComponentsBadge]: 'Badge',
      [RouteEnum.ComponentsBreadcrumb]: 'Breadcrumb',
      [RouteEnum.ComponentsButtonGroup]: 'Button Group',
      [RouteEnum.ComponentsCard]: 'Card',
      [RouteEnum.ComponentsDropdown]: 'Dropdown',
      [RouteEnum.ComponentsModal]: 'Modal',
      [RouteEnum.ComponentsPagination]: 'Pagination',
      [RouteEnum.ComponentsPopover]: 'Popover',
      [RouteEnum.ComponentsSpinner]: 'Spinner',
      [RouteEnum.ComponentsToast]: 'Toast',
      [RouteEnum.ComponentsTooltip]: 'Tooltip',
      [RouteEnum.Form]: 'Form',
      [RouteEnum.FormInput]: 'Input',
      [RouteEnum.FormInputGroup]: 'Input Group',
      [RouteEnum.FormInputNumber]: 'Input Number',
      [RouteEnum.FormInputPassword]: 'Input Password',
      [RouteEnum.FormTextarea]: 'Textarea',
      [RouteEnum.FormFormGroup]: 'Form Group',
      [RouteEnum.FormDateAndTimePicker]: 'Date & Time Pickers',
      [RouteEnum.FormSelect]: 'Select',
      [RouteEnum.FormAutocomplete]: 'Autocomplete',
      [RouteEnum.FormCheckAndRadio]: 'Checkbox & Radio',
      [RouteEnum.FormValidation]: 'Validation',
      [RouteEnum.Content]: 'Content',
      [RouteEnum.ContentTypography]: 'Typography',
      [RouteEnum.ContentTable]: 'Table',
      [RouteEnum.ComponentsPopper]: 'Popper',
      [RouteEnum.ComponentSkeleton]: 'Skeleton',
      [RouteEnum.Utils]: 'Utils',
      [RouteEnum.UtilsClickAway]: 'Click Away Listener',
      [RouteEnum.Advanced]: 'Advanced',
      [RouteEnum.AdvancedFilter]: 'Filter',
      [RouteEnum.AdvancedEditor]: 'Editor',
      [RouteEnum.AdvancedViewBuilder]: 'View Builder',
    }
  }
}
i18next.use(initReactI18next).init({
  lng: Lang.English,
  debug: true,
  resources: resources,
  // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
  // set returnNull to false (and also in the i18next.d.ts options)
  // returnNull: false,
});

export const router = createBrowserRouter([
  {
    id: RouteEnum.Home,
    path: '/',
    element: <App/>,
    children: [
      {
        id: RouteEnum.Components,
        path: 'components',
        children: [
          {
            id: RouteEnum.ComponentsAlert,
            path: 'alert',
            element: <AlertPage />
          },
          {
            id: RouteEnum.ComponentsBadge,
            path: 'badge',
            element: <BadgePage />
          },
          {
            id: RouteEnum.ComponentsBreadcrumb,
            path: 'breadcrumb',
            element: <BreadcrumbPage />
          },
          {
            id: RouteEnum.ComponentsButton,
            path: 'button',
            element: <ButtonPage/>
          },
          {
            id: RouteEnum.ComponentsButtonGroup,
            path: 'button-group',
            element: <ButtonGroupPage/>
          },
          {
            id: RouteEnum.ComponentsCard,
            path: 'card',
            element: <CardPage/>
          },
          {
            id: RouteEnum.ComponentsDropdown,
            path: 'dropdown',
            element: <DropdownPage/>
          },
          {
            id: RouteEnum.ComponentsModal,
            path: 'modal',
            element: <ModalPage/>
          },
          {
            id: RouteEnum.ComponentsPagination,
            path: 'pagination',
            element: <PaginationPage/>
          },
          {
            id: RouteEnum.ComponentsSpinner,
            path: 'spinner',
            element: <SpinnerPage/>
          },
          {
            id: RouteEnum.ComponentsToast,
            path: 'toast',
            element: <ToastPage/>
          },
        ]
      },
      {
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
            id: RouteEnum.FormInputGroup,
            path: 'input-group',
            element: <InputGroupPage/>
          },
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
