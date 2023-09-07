import {useDatePickerContext as useRehookifyDatePicker} from '@rehookify/datepicker';
import {CalendarBody, CalendarFooter, CalendarHeader} from './Calendar';
import {Card} from '../../Components';

export const DatePickerContent = ({}) => {
  const datePicker = useRehookifyDatePicker();

  return (
    <div className='flex space-x-5'>
      {datePicker.data.calendars.map((calendar, index) => (
        <Card
          key={index}
          className='p-0 border-none w-52 gap-y-2 h-64'
          header={<CalendarHeader calendar={calendar}/>}
          footer={<CalendarFooter/>}
        >
          <CalendarBody calendar={calendar}/>
        </Card>
      ))}
    </div>
  );
};