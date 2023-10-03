import {FC} from 'react';
import {DatePickerProps} from './DatePicker.types.ts';
import {DatePickerProvider} from './Datepicker.Context.tsx';
import DatePickerInput from './DatePicker.Input.tsx';
import {DatepickerContent} from './Datepicker.Content.tsx';
import {Popup} from '../../Components';

const DatePicker: FC<DatePickerProps> = (
  {
    slotProps,
    value,
    onChange,
    format,
    includeTime,
    timeFormat,
    mode,
    inline,
    ...props
  }
) => {
  const {disabled, readOnly} = props;

  return (
    <DatePickerProvider
      value={value}
      onChange={onChange}
      format={format}
      includeTime={includeTime}
      timeFormat={timeFormat}
      mode={mode}
      disabled={disabled}
    >
      {inline ?
        <DatepickerContent/> :
        <Popup
          trigger='click'
          {...slotProps?.popup}
          content={<DatepickerContent/>}
          open={(disabled || readOnly) ? false : undefined}
        >
          <DatePickerInput {...props}/>
        </Popup>
      }

    </DatePickerProvider>
  );
};

export default DatePicker;