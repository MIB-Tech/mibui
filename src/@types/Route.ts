export enum RouteEnum {
  Home = 'HOME',
  //
  Components = 'COMPONENTS',
  ComponentsAlert = 'COMPONENTS.ALERT',
  ComponentsBadge = 'COMPONENTS.BADGE',
  ComponentsBreadcrumb = 'COMPONENTS.BREADCRUMB',
  ComponentsButton = 'COMPONENTS.BUTTON',
  ComponentsButtonGroup = 'COMPONENTS.BUTTON_GROUP',
  ComponentsCard = 'COMPONENTS.CARD',
  ComponentsDropdown = 'COMPONENTS.DROPDOWN',
  ComponentsModal = 'COMPONENTS.MODAL',
  ComponentsPagination = 'COMPONENTS.PAGINATION',
  ComponentsPopover = 'COMPONENTS.Popover',
  ComponentsSpinner = 'COMPONENTS.SPINNER',
  ComponentsToast = 'COMPONENTS.TOAST',
  ComponentsTooltip = 'COMPONENTS.TOOLTIP',
  //
  Form = 'FORM',
  FormInput = 'FORM.INPUT',
  FormInputNumber = 'FORM.INPUT.NUMBER',
  FormInputPassword = 'FORM.INPUT.PASSWORD',
  FormInputGroup = 'FORM.INPUT_GROUP',
  FormFormGroup = 'FORM.FORM_GROUP',
  FormDatePicker = 'FORM.DATE_PICKER',
  FormDatePickerSingle = 'FORM.DATE_PICKER.SINGLE',
  FormDatePickerRange = 'FORM.DATE_PICKER.RANGE',
  FormDatePickerMultiple = 'FORM.DATE_PICKER.MULTIPLE',
  FormSelect = 'FORM.SELECT',
  FormAutocomplete = 'FORM.AUTOCOMPLETE',
  FormCheckAndRadio = 'FORM.CHECK_RADIO',
  FormValidation = 'FORM.VALIDATION',
  //
  Content = 'CONTENT',
  ContentTypography = 'CONTENT.TYPOGRAPHY',
  ContentTable = 'CONTENT.TABLE',
  //
  ComponentsPopper = 'COMPONENTS.POPPER',
  ComponentSkeleton = 'COMPONENTS.SKELETON',
  //
  Utils = 'UTILS',
  UtilsClickAway = 'UTILS.CLICK_AWAY',
  //
  Advanced = 'ADVANCED',
  AdvancedFilter = 'AdvancedFilter',
  AdvancedEditor = 'AdvancedEditor',
  AdvancedViewBuilder = 'AdvancedViewBuilder',
}

export type RouteType = {
  title: string
}