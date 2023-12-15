export enum RouteEnum {
  Home = 'HOME',
  //
  Components = 'COMPONENTS',
  ComponentsAlert = 'COMPONENTS.ALERT',
  ComponentsAvatar = 'COMPONENTS.AVATAR',
  ComponentsBadge = 'COMPONENTS.BADGE',
  ComponentsBreadcrumb = 'COMPONENTS.BREADCRUMB',
  ComponentsButton = 'COMPONENTS.BUTTON',
  ComponentsButtonGroup = 'COMPONENTS.BUTTON_GROUP',
  ComponentsCard = 'COMPONENTS.CARD',
  ComponentsCheckbox = 'COMPONENTS.CHECKBOX',
  ComponentsDataGrid = 'COMPONENTS.DATA_GRID',
  ComponentsDropdown = 'COMPONENTS.DROPDOWN',
  ComponentsList = 'COMPONENTS.LIST',
  ComponentsModal = 'COMPONENTS.MODAL',
  ComponentsPagination = 'COMPONENTS.PAGINATION',
  ComponentsSidebar = 'COMPONENTS.SIDEBAR',
  ComponentsPopover = 'COMPONENTS.Popover',
  ComponentsProgress = 'COMPONENTS.Progress',
  ComponentsTabs = 'COMPONENTS.TABS',
  ComponentsSkeleton = 'COMPONENTS.Skeleton',
  ComponentsSpinner = 'COMPONENTS.SPINNER',
  ComponentsToast = 'COMPONENTS.TOAST',
  ComponentsTooltip = 'COMPONENTS.TOOLTIP',
  //
  Form = 'FORM',
  FormInput = 'FORM.INPUT',
  FormInputNumber = 'FORM.INPUT.NUMBER',
  FormInputPassword = 'FORM.INPUT.PASSWORD',
  FormInputGroup = 'FORM.INPUT_GROUP',
  FormFormGroup = 'FORM.FORM_CONTROL',
  FormDatePicker = 'FORM.DATE_PICKER',
  FormDatePickerSingle = 'FORM.DATE_PICKER.SINGLE',
  FormDatePickerRange = 'FORM.DATE_PICKER.RANGE',
  FormDatePickerMultiple = 'FORM.DATE_PICKER.MULTIPLE',
  FormSelect = 'FORM.SELECT',
  FormSlider = 'FORM.SLIDER',
  FormAutocomplete = 'FORM.AUTOCOMPLETE',
  FormCheckAndRadio = 'FORM.CHECK_RADIO',
  FormValidation = 'FORM.VALIDATION',
  FormSwitch = 'FORM.SWITCH',
  //
  Content = 'CONTENT',
  ContentTypography = 'CONTENT.TYPOGRAPHY',
  ContentTable = 'CONTENT.TABLE',
  //
  ComponentsPopper = 'COMPONENTS.POPPER',
  //
  Utils = 'UTILS',
  UtilsClickAway = 'UTILS.CLICK_AWAY',
  //
  Advanced = 'ADVANCED',
  AdvancedFilter = 'AdvancedFilter',
  AdvancedEditor = 'AdvancedEditor',
  AdvancedViewBuilder = 'AdvancedViewBuilder',
  //
  ApplicationUI = 'APPLICATION_UI',
  ApplicationUIFormLayout = 'APPLICATION_UI.FORM_LAYOUT',
  ApplicationUIAuth = 'APPLICATION_UI.AUTH',
  ApplicationUIAuthLoginForm = 'APPLICATION_UI.AUTH.LOGIN_FORM',
  //
  PurchaseOrder = 'PURCHASE_ORDER',
  PurchaseOrderListing = 'PURCHASE_ORDER_LISTING',
  PurchaseOrderCreate = 'PURCHASE_ORDER_CREATE',
  PurchaseOrderDetail = 'PURCHASE_ORDER_DETAIL',
  PurchaseOrderUpdate = 'PURCHASE_ORDER_UPDATE',
  PurchaseOrderDelete = 'PURCHASE_ORDER_DELETE',
  //
  Receipt = 'RECEIPT',
  ReceiptListing = 'RECEIPT_LISTING',
  ReceiptCreate = 'RECEIPT_CREATE',
  ReceiptDetail = 'RECEIPT_DETAIL',
  ReceiptUpdate = 'RECEIPT_UPDATE',
  ReceiptDelete = 'RECEIPT_DELETE',
  //
  Reporting = 'REPORTING'
}

export type RouteType = {
  title: string
}