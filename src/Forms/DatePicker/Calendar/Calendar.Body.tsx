import {View} from '../DatePicker.types.ts';
import {DPCalendar, useDatePickerContext} from '@rehookify/datepicker';
import {FC} from 'react';
import {CalendarButton} from './Calendar.Button.tsx';
import CalendarGrid from './Calendar.Grid.tsx';
import {twMerge} from 'tailwind-merge';
import {useCalendarContext} from './Calendar.Context.tsx';

export type DatePickerCalendarBodyProps = {
  calendar: DPCalendar
}
const CalendarBody: FC<DatePickerCalendarBodyProps> = ({calendar}) => {
  const {view, setView} = useCalendarContext();
  const {days} = calendar;
  const {data, propGetters} = useDatePickerContext();
  const {timeButton, monthButton, yearButton} = propGetters;
  const {time, months, years} = data;

  switch (view) {
    case View.Year:
      return (
        <CalendarGrid className='grid-cols-3'>
          {years.map(year => (
            <CalendarButton
              key={year.$date.toString()}
              {...yearButton(year, {onClick: () => setView(View.Day)})}
              active={year.selected}
            >
              {year.year}
            </CalendarButton>
          ))}
        </CalendarGrid>
      );
    case View.Month:
      return (
        <CalendarGrid className='grid-cols-3'>
          {months.map(month => (
            <CalendarButton
              key={month.$date.toString()}
              {...monthButton(month, {onClick: () => setView(View.Day)})}
              active={month.selected}
              className='capitalize'
            >
              {month.month}
            </CalendarButton>
          ))}
        </CalendarGrid>
      );
    case View.Day:
      return (
        <CalendarGrid className='grid-cols-7 gap-0.5 pt-1'>
          {data.weekDays.map(day => <div key={day} className='text-xs text-center'>{day}</div>)}
          {days.map(day => {
            const {selected, range, inCurrentMonth} = day;

            const willBeRangeStart = range === 'will-be-range-start';
            const willBeRangeEnd = range === 'will-be-range-end';
            const inRange = range === 'in-range';
            const willBeInRange = range === 'will-be-in-range';

            return (
              <div key={day.$date.toString()}>
                <CalendarButton
                  square
                  outline={day.now}
                  className={twMerge(
                    `leading-4`,
                    !inCurrentMonth && 'opacity-50',
                    range && 'rounded-none',
                    (range === 'range-start' || willBeRangeStart) && 'rounded-s',
                    (range === 'range-end' || willBeRangeEnd) && 'rounded-e'
                  )}
                  {...propGetters.dayButton(day)}
                  active={selected || willBeRangeStart || willBeRangeEnd}
                  variant={inRange || willBeInRange ? 'light' : undefined}
                  color={inRange || willBeInRange ? 'primary' : undefined}
                >
                  {day.day}
                </CalendarButton>
              </div>
            );
          })}
        </CalendarGrid>
      );
    case View.Time:
      return (
        <CalendarGrid className='overflow-x-hidden overflow-y-auto gap-0'>
          {time.map(t => (
            <CalendarButton
              key={t.$date.toString()}
              {...timeButton(t, {onClick: () => setView(View.Day)})}
              active={t.selected}
            >
              {t.time}
            </CalendarButton>
          ))}
        </CalendarGrid>
      );
  }
};

export default CalendarBody;