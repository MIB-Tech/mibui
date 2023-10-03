import {useDatePickerContext as useRehookifyDatePicker} from '@rehookify/datepicker';
import {Calendar} from './Calendar/Calendar.tsx';
import {createContext, useContext} from 'react';
import {View} from './DatePicker.types.ts';

export const ViewContext = createContext<{
  view: View,
  setView: (view: View) => void
}>({
  view: View.Day,
  setView: () => {
  }
});
export const useView = () => useContext(ViewContext);


export const DatepickerContent = () => {
  const picker = useRehookifyDatePicker();

  return (
    <div className='grid grid-flow-col auto-cols-max bg-white overflow-hidden rounded'>
      {picker.data.calendars.map((calendar, index) => <Calendar key={index} {...calendar} />)}
    </div>
  );
};