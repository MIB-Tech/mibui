import {BackOffsetButton, ForwardOffsetButton} from './Calendar.Offset.Button.tsx';
import {View} from '../DatePicker.types.ts';
import {DPCalendar, useDatePickerContext as useRehookifyDatePicker} from '@rehookify/datepicker';
import {ViewButton} from '../ViewButton.tsx';
import {FC} from 'react';

import {useCalendarContext} from './Calendar.Context.tsx';

export type DatePickerCalendarHeaderProps = {
  calendar: DPCalendar
}
const CalendarHeader: FC<DatePickerCalendarHeaderProps> = ({calendar}) => {
  const {
    view,
    setView
  } = useCalendarContext();
  const {propGetters} = useRehookifyDatePicker();
  const {month, year} = calendar;
  const {
    previousYearsButton,
    nextYearsButton,
    addOffset,
    subtractOffset
  } = propGetters;


  return (
    <div className='flex justify-between gap-x-2'>
      {view === View.Year && <BackOffsetButton {...previousYearsButton()}/>}
      {view === View.Month && <BackOffsetButton {...subtractOffset({years: 1})}/>}
      {view === View.Day && <BackOffsetButton {...subtractOffset({months: 1})}/>}
      {/*{view === View.Time && <BackOffsetButton {...subtractOffset({days: 1})}/>}*/}
      <div className='flex space-x-1'>
        <ViewButton
          active={view === View.Month}
          onClick={() => setView(View.Month)}
        >
          {month}
        </ViewButton>
        <ViewButton
          active={view === View.Year}
          onClick={() => setView(View.Year)}
        >
          {year}
        </ViewButton>
      </div>
      {view === View.Year && <ForwardOffsetButton {...nextYearsButton()}/>}
      {view === View.Month && <ForwardOffsetButton {...addOffset({years: 1})}/>}
      {view === View.Day && <ForwardOffsetButton {...addOffset({months: 1})}/>}
      {/*{view === View.Time && <ForwardOffsetButton {...addOffset({days: 1})}/>}*/}
    </div>
  );
};

export default CalendarHeader;