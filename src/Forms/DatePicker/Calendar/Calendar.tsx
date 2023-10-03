import {DPCalendar} from '@rehookify/datepicker';
import {useState} from 'react';
import {View} from '../DatePicker.types.ts';
import {Card} from '../../../Components';
import {CalendarBody, CalendarFooter, CalendarHeader} from './index.ts';
import {CalendarContext} from './Calendar.Context.tsx';

export type CalendarProps = DPCalendar
export const Calendar = (props: CalendarProps) => {
  const [view, setView] = useState<View>(View.Day);

  return (
    <CalendarContext.Provider value={{view, setView}}>
      <Card
        className='grid gap-y-0.5 w-56 h-[240px] p-2 border-none'
        header={<CalendarHeader calendar={props}/>}
        footer={<CalendarFooter/>}
      >
        <CalendarBody calendar={props}/>
      </Card>
    </CalendarContext.Provider>

  );
};