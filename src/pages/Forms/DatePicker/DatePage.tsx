import {Preview} from '../../../Components';
import {DatePicker} from '../../../Forms';
import {FC, useState} from 'react';
import {
  DATE_FORMAT_CONFIG,
  DateFormat,
  DatePickerProps,
  TimeFormat
} from '../../../Forms/DatePicker/DatePicker.types.ts';

const DatePickerExample: FC<Omit<DatePickerProps, 'value' | 'onChange'>> = (props) => {
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
        title='Date Range'
        className='flex justify-center'
      >
        <DatePickerExample
          includeTime
          mode='range'
        />
      </Preview>
      <Preview
        title='Date Multiple'
        className='flex justify-center'
      >
        <DatePickerExample
          includeTime
          mode='multiple'
        />
      </Preview>
      <Preview
        title='Date Format'
        className='grid grid-cols-3 gap-4'
      >
        {Object.values(DateFormat).map(format => (
          <DatePickerExample
            key={format}
            format={format}
            slotProps={{
              input: {
                placeholder: DATE_FORMAT_CONFIG[format].label
              }
            }}
          />
        ))}
        {Object.values(TimeFormat).map(format => (
          <DatePickerExample
            key={format}
            includeTime
            timeFormat={format}
            slotProps={{
              input: {
                placeholder: DATE_FORMAT_CONFIG[format].label
              }
            }}
          />
        ))}
      </Preview>
    </div>
  );
};

export default Page;