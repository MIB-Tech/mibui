import {Button} from '../../../Components';
import {View} from '../DatePicker.types.ts';
import {useDatePickerContext as useRehookifyDatePicker} from '@rehookify/datepicker';
import {useDatePicker} from '../Datepicker.Context.tsx';
import moment from 'moment';
import {ViewButton} from '../ViewButton.tsx';
import {FC} from 'react';

import {useCalendarContext} from './Calendar.Context.tsx';

export type DatePickerCalendarFooterProps = {}
const CalendarFooter: FC<DatePickerCalendarFooterProps> = () => {
  const {includeTime, onChange} = useDatePicker();
  const {view, setView} = useCalendarContext()
  const {data, propGetters} = useRehookifyDatePicker();
  const {selectedDates, time} = data;
  const {setOffset} = propGetters;


  return (
    <div className='flex justify-between'>
      <div className='flex space-x-1'>
        <Button
          variant='light'
          color='secondary'
          size='sm'
          disabled={selectedDates.length === 0}
          onClick={() => {
            onChange([]);
          }}
        >
          Clear
        </Button>
        <Button
          variant='light'
          color='secondary'
          size='sm'
          onClick={(e) => {
            const now = moment().startOf('day');
            onChange([now.toDate()]);
            setOffset(now.toDate()).onClick?.(e);
            setView(View.Day);
          }}
        >
          Today
        </Button>
      </div>
      {includeTime && (
        <ViewButton
          active={view === View.Time}
          onClick={() => setView(View.Time)}
        >
          {time.find(t => t.selected)?.time || '00:00'}
        </ViewButton>
      )}
    </div>
  );
};

export default CalendarFooter;