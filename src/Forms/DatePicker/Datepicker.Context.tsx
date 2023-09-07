import {createContext, Dispatch, FC, HTMLAttributes, SetStateAction, useContext} from 'react';
import {DateFormat, DatePickerProps, View} from './DatePicker.types.ts';
import {DatePickerProvider as BaseDatePickerProvider} from '@rehookify/datepicker';
import {useLocale} from '../../main.tsx';

type DatepickerContextType = {
  view?: View
  setView: Dispatch<SetStateAction<View>>
} & Omit<DatePickerProps, 'popupProps'>

export const DatePickerContext = createContext<DatepickerContextType>({
  mode: 'single',
  onChange: () => {
  },
  value: [],
  format: DateFormat.Local,
  view: View.Day,
  setView: () => {
  }
});

export const useDatePicker = () => {
  const context = useContext(DatePickerContext);

  return {
    ...context
  };
};


type DatePickerProviderProps = Pick<HTMLAttributes<HTMLDivElement>, 'children'> & DatepickerContextType
export const DatePickerProvider: FC<DatePickerProviderProps> = ({children, ...props}) => {
  const {locale} = useLocale();
  const {mode, value, onChange} = props

  return (
    <DatePickerContext.Provider value={props}>
      <BaseDatePickerProvider
        config={{
          calendar: {startDay: 1, offsets: mode === 'range' ? [1]: undefined},
          locale: {
            locale,
            monthName: 'short'
          },
          time: {interval: 5},
          selectedDates: value,
          onDatesChange: onChange,
          // years: {numberOfYears: 20},
          dates: {
            mode,
            toggle: true,
            selectSameDate: true
          }
        }}>
        {children}
      </BaseDatePickerProvider>
    </DatePickerContext.Provider>
  );
};