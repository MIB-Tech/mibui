import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouteEnum} from './@types/Route';
import i18next, {Resource} from 'i18next';
import {initReactI18next} from 'react-i18next';
import moment from 'moment/moment';
import 'moment/dist/locale/fr';
import App from './App.tsx';

enum Lang {
  English = 'en',
  French = 'fr'
}

moment.locale(Lang.French);

const en:Record<'translation', Record<RouteEnum, string>> = {
  translation: {
    [RouteEnum.Home]: 'Home',
    [RouteEnum.Components]: 'Components',
    [RouteEnum.ComponentsButton]: 'Button',
    [RouteEnum.ComponentsAlert]: 'Alert',
    [RouteEnum.ComponentsAvatar]: 'Avatar',
    [RouteEnum.ComponentsBadge]: 'Badge',
    [RouteEnum.ComponentsBreadcrumb]: 'Breadcrumb',
    [RouteEnum.ComponentsButtonGroup]: 'Button Group',
    [RouteEnum.ComponentsCard]: 'Card',
    [RouteEnum.ComponentsCheckbox]: 'Checkbox',
    [RouteEnum.ComponentsDropdown]: 'Dropdown',
    [RouteEnum.ComponentsList]: 'List',
    [RouteEnum.ComponentsModal]: 'Modal',
    [RouteEnum.ComponentsPagination]: 'Pagination',
    [RouteEnum.ComponentsPopover]: 'Popover',
    [RouteEnum.ComponentsProgress]: 'Progress',
    [RouteEnum.ComponentsSidebar]: 'Sidebar',
    [RouteEnum.ComponentsSkeleton]: 'Skeleton',
    [RouteEnum.ComponentsSpinner]: 'Spinner',
    [RouteEnum.ComponentsTabs]: 'Tabs',
    [RouteEnum.ComponentsToast]: 'Toast',
    [RouteEnum.ComponentsTooltip]: 'Tooltip',
    [RouteEnum.Form]: 'Form',
    [RouteEnum.FormInput]: 'Input',
    [RouteEnum.FormInputGroup]: 'Input Group',
    [RouteEnum.FormInputNumber]: 'Input Number',
    [RouteEnum.FormInputPassword]: 'Input Password',
    [RouteEnum.FormFormControl]: 'Form Control',
    [RouteEnum.FormDatePicker]: 'Date Picker',
    [RouteEnum.FormDatePickerSingle]: 'Date Picker',
    [RouteEnum.FormDatePickerRange]: 'Date Range',
    [RouteEnum.FormDatePickerMultiple]: 'Date Multiple',
    [RouteEnum.FormSelect]: 'Select',
    [RouteEnum.FormSwitch]: 'Switch',
    [RouteEnum.FormAutocomplete]: 'Autocomplete',
    [RouteEnum.FormCheckAndRadio]: 'Checkbox & Radio',
    [RouteEnum.FormValidation]: 'Validation',
    [RouteEnum.Content]: 'Content',
    [RouteEnum.ContentTypography]: 'Typography',
    [RouteEnum.ContentTable]: 'Table',
    [RouteEnum.ComponentsPopper]: 'Popper',
    [RouteEnum.Utils]: 'Utils',
    [RouteEnum.UtilsClickAway]: 'Click Away Listener',
    [RouteEnum.Advanced]: 'Advanced',
    [RouteEnum.AdvancedFilter]: 'Filter',
    [RouteEnum.AdvancedEditor]: 'Editor',
    [RouteEnum.AdvancedViewBuilder]: 'View Builder',
    [RouteEnum.FormSlider]: 'Slider',
    [RouteEnum.ComponentsDataGrid]: 'DataGrid',
    [RouteEnum.ApplicationUI]: 'Application UI',
    [RouteEnum.ApplicationUIFormLayout]: 'Saisie une commande d\'achat',
    [RouteEnum.ApplicationUIAuth]: 'Authentication',
    [RouteEnum.ApplicationUIAuthLoginForm]: 'Login Form',
  }
};
const resources: Resource = {
  [Lang.English]: en,
  [Lang.French]: en
};
i18next.use(initReactI18next).init({
  lng: Lang.English,
  // debug: true,
  resources
}).then(() => {
});

export const useLocale = () => ({
  locale: Lang.French
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
