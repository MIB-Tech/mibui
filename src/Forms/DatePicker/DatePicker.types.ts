import {PopoverProps} from '../../Components/Popover/Popover.types.tsx';
import {DPDatesConfig} from '@rehookify/datepicker';
import {InputProps} from '../Input/Input.types.ts';

export type DatePickerInputProps = Omit<InputProps, 'onChange' | 'maxRows' | 'minRows' | 'multiline' | 'rows' | 'type'>


export type DatePickerProps = {
  format?: DateFormat
  //
  includeTime?: boolean
  timeFormat?: TimeFormat
  slotProps?: {
    popup?: Omit<PopoverProps, 'content' | 'children'>
  }
  //
  value: Date[]
  onChange: (value: Date[]) => void
} & Partial<Pick<DPDatesConfig, 'mode'>>
 & DatePickerInputProps

export enum DateFormat {
  Local = 'L',
  Friendly = 'LL',
  US = 'M/D/YYYY',
  European = 'D/M/YYYY',
  ISO = 'YYYY-MM-DD',
}
export enum TimeFormat {
  Half = 'hh:mm a',
  Full = 'HH:mm',
}

export const DATE_FORMAT_CONFIG:Record<DateFormat|TimeFormat, { label: string }> = {
  [DateFormat.Local]: {
    label: 'Local'
  },
  [DateFormat.Friendly]: {
    label: 'Friendly'
  },
  [DateFormat.US]: {
    label: 'US'
  },
  [DateFormat.European]: {
    label: 'European'
  },
  [DateFormat.ISO]: {
    label: 'ISO'
  },
  [TimeFormat.Half]: {
    label: '24h'
  },
  [TimeFormat.Full]: {
    label: '12h'
  },
}

export enum View {
  Year = 'YYYY',
  Month = 'MM',
  Day = 'DD',
  Time = 'HH:mm',
}

export type ViewProps = {}