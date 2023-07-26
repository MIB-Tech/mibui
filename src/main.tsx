import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {RouteEnum} from './@types/Route';
import App from './App.tsx';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {ButtonPage, PaginationPage} from './pages/Components';
import {AlertPage} from './pages/Components/Alert';

enum Lang {
  English = 'en'
}

const resources: Record<Lang, { translation: Record<RouteEnum, string> }> = {
  [Lang.English]: {
    translation: {
      [RouteEnum.Home]: 'Home',
      [RouteEnum.Components]: 'Components',
      [RouteEnum.ComponentButton]: 'Button',
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
            id: RouteEnum.ComponentButton,
            path: 'button',
            element: <ButtonPage/>
          },
          {
            id: RouteEnum.ComponentsPagination,
            path: 'pagination',
            element: <PaginationPage/>
          },
        ]
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
