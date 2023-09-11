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
  ComponentsPopover = 'COMPONENTS.POPOVER',
  ComponentsSpinner = 'COMPONENTS.SPINNER',
  ComponentsToast = 'COMPONENTS.TOAST',
  ComponentsTooltip = 'COMPONENTS.TOOLTIP',
  ComponentsTable='COMPONENTS.TABLE',
  //
  Form = 'FORM',
  FormInput = 'FORM.INPUT',
  FormInputNumber = 'FORM.INPUT.NUMBER',
  FormInputPassword = 'FORM.INPUT.PASSWORD',
  FormTextarea = 'FORM.TEXT_AREA',
  FormInputGroup = 'FORM.INPUT_GROUP',
  FormFormGroup = 'FORM.FORM_GROUP',
  FormDateAndTimePicker = 'FORM.DATE_AND_TIME_PICKERS',
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