import {RouteEnum} from '../../@types/Route.ts';
import {AlertPage} from './Alert';
import {BadgePage} from './Badge';
import {BreadcrumbPage} from './Breadcrumb';
import {ButtonPage} from './Button';
import {ButtonGroupPage} from './ButtonGroup';
import {CardPage} from './Card';
import {DropdownPage} from './Dropdown';
import {ModalPage} from './Modal';
import {PaginationPage} from './Pagination';
import {SpinnerPage} from './Spinner';
import {ToastPage} from './Toast';
import {TooltipPage} from './Tooltip';
import {RouteObject} from 'react-router/dist/lib/context';
import {PopoverPage} from "./Popover";

const ROUTES: RouteObject = {
  id: RouteEnum.Components,
  path: 'components',
  children: [
    {
      id: RouteEnum.ComponentsAlert,
      path: 'alert',
      element: <AlertPage/>
    },
    {
      id: RouteEnum.ComponentsBadge,
      path: 'badge',
      element: <BadgePage/>
    },
    {
      id: RouteEnum.ComponentsBreadcrumb,
      path: 'breadcrumb',
      element: <BreadcrumbPage/>
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
    {
      id: RouteEnum.ComponentsTooltip,
      path: 'tooltip',
      element: <TooltipPage/>
    },
    {
      id: RouteEnum.ComponentsPopover,
      path: 'popover',
      element: <PopoverPage/>
    },
  ]
};

export default ROUTES;