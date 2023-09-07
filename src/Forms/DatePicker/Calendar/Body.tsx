import {DayView} from '../Views/Day';
import {YearView} from '../Views/Year';
import {MonthView} from '../Views/Month';
import {View} from '../DatePicker.types.ts';
import {DPCalendar} from '@rehookify/datepicker';
import {useDatePicker} from '../Datepicker.Context.tsx';
import {TimeView} from '../Views/Time';
import {FC} from 'react';

export type DatePickerCalendarBodyProps = {
  calendar: DPCalendar
}
const Body: FC<DatePickerCalendarBodyProps> = ({calendar}) => {
  const {view} = useDatePicker();
  const {days} = calendar;

  switch (view) {
    case View.Year:
      return <YearView/>
    case View.Month:
      return <MonthView/>
    case View.Day:
      return <DayView days={days}/>
    case View.Time:
      return <TimeView/>
  }
};

export default Body