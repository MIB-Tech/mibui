import {FC, useState} from 'react';
import {DatePickerProps, View} from './DatePicker.types.ts';
import {Popover} from '../../Components/Popover';
import {DatePickerProvider} from './Datepicker.Context.tsx';
import DatePickerInput from './DatePicker.Input.tsx';
import {DatePickerContent} from './DatePicker.Content.tsx';

const DatePicker: FC<DatePickerProps> = (
  {
    slotProps,
    value,
    onChange,
    format,
    includeTime,
    timeFormat,
    mode,
    ...props
  }) => {
  const [view, setView] = useState<View>(View.Day);

  return (
    <DatePickerProvider
      view={view}
      setView={setView}
      value={value}
      onChange={onChange}
      format={format}
      includeTime={includeTime}
      timeFormat={timeFormat}
      mode={mode}
    >
      <Popover
        {...slotProps?.popup}
        content={<DatePickerContent/>}
        className='p-2'
      >
        <DatePickerInput {...props}/>
      </Popover>
    </DatePickerProvider>
  );
};

export default DatePicker;