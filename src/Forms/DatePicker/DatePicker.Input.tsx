import {AdornmentIconButton} from '../InputGroup/AdornmentIconButton.tsx';
import {CalendarDaysIcon} from '@heroicons/react/20/solid';
import {Input} from '../Input';
import {DateFormat, DatePickerInputProps} from './DatePicker.types.ts';
import moment from 'moment/moment';
import {useDatePicker} from './Datepicker.Context.tsx';
import {useDatePickerContext as useRehookifyDatePicker} from '@rehookify/datepicker';
import {forwardRef} from 'react';
import {defaultDateFormat, defaultTimeFormat} from './Datepicker.utils.tsx';


const DatePickerInput = forwardRef<HTMLInputElement, DatePickerInputProps>((props, ref) => {
  const {
    includeTime,
    format = defaultDateFormat,
    timeFormat = defaultTimeFormat,
    mode
  } = useDatePicker();
  const {data} = useRehookifyDatePicker();
  const {selectedDates} = data;

  const datePlaceholder = format === DateFormat.Local || format === DateFormat.Friendly ?
    moment.localeData().longDateFormat(format) :
    format;

  const isRange = mode === 'range'
  const separator = isRange ? ' to ' : ', '
  const placeholder = datePlaceholder + (includeTime ? ` ${timeFormat}` : '');
  const inputLabel = selectedDates.map(date => moment(date).format(placeholder)).join(separator);

  return (
    <Input
      placeholder={isRange ? `${placeholder}${separator}${placeholder}` : placeholder}
      {...props}
      ref={ref}
      value={isRange && selectedDates.length === 1 ? `${inputLabel}${separator}...`: inputLabel}
      slotProps={{input: {className: 'tabular-nums'}}}
      endAdornment={<AdornmentIconButton iconElement={CalendarDaysIcon}/>}
    />
  );
});

export default DatePickerInput;