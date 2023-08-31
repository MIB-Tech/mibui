import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {RouteEnum} from './@types/Route';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {ROUTES} from './pages';

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
  // debug: true,
  resources
}).then(() => {});

export const router = createBrowserRouter([ROUTES]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
