import {createContext, useContext} from 'react';
import {View} from '../DatePicker.types.ts';

type CalendarContextProps = {
  view: View,
  setView: (view: View) => void
}
export const CalendarContext = createContext<CalendarContextProps>({
  view: View.Day,
  setView: () => {
  }
});
export const useCalendarContext = () => useContext(CalendarContext);