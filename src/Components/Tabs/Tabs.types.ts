import {
  TabsProps as MuiTabsProps,
  TabsListProps as MuiTabsListProps,
  TabProps as MuiTabProps,
  TabPanelProps as MuiTabPanelProps,
} from '@mui/base'

export type TabsProps = {
  vertical?: boolean
} & Omit<MuiTabsProps, 'orientation'>
export type TabsListProps = MuiTabsListProps
export type TabProps = MuiTabProps
export type TabPanelProps = MuiTabPanelProps