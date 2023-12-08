import {Preview} from '../../../Components';
import {DatePicker} from '../../../Forms';
import {FC, useState} from 'react';
import {
  DATE_FORMAT_CONFIG,
  DateFormat,
  DatePickerProps,
  TimeFormat
} from '../../../Forms/DatePicker/DatePicker.types.ts';

export const DatePickerExample: FC<Omit<DatePickerProps, 'value' | 'onChange'>> = (props) => {
  const [value, setValue] = useState<Date[]>([]);

  return (
    <DatePicker
      {...props}
      value={value}
      onChange={setValue}
    />
  );
};

const Page = () => {

  return (
    <div className='flex flex-col gap-12'>
      <Preview
        title='Date'
        className='flex justify-center'
      >
        <DatePickerExample/>
      </Preview>
      <Preview
        title='Include time'
        className='flex justify-center'
      >
        <DatePickerExample includeTime/>
      </Preview>
      <Preview
        title='Date Format'
        className='grid grid-cols-3 gap-4'
      >
        {Object.values(DateFormat).map(format => (
          <DatePickerExample
            key={format}
            format={format}
            placeholder={DATE_FORMAT_CONFIG[format].label}
          />
        ))}
      </Preview>
      <Preview
        title='Time Format'
        className='flex space-x-4'
      >
        {Object.values(TimeFormat).map(format => (
          <DatePickerExample
            key={format}
            includeTime
            timeFormat={format}
            placeholder={DATE_FORMAT_CONFIG[format].label}
          />
        ))}
      </Preview>
      <Preview
        title='Form props'
        className='flex justify-center space-x-4'
      >
        <DatePickerExample disabled placeholder='Disabled'/>
        <DatePickerExample readOnly placeholder='ReadOnly'/>
      </Preview>
      <Preview
        title='Inline Calendar'
        className='flex justify-center space-x-4'
      >
        <DatePickerExample inline/>
      </Preview>
    </div>
  );
};

export default Page;