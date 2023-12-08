import {createContext, FC, HTMLAttributes, useContext} from 'react';
import {DateFormat, DatePickerProps} from './DatePicker.types.ts';
import {DatePickerProvider as BaseDatePickerProvider} from '@rehookify/datepicker';
import {useLocale} from '../../main.tsx';

type DatepickerContextType = Omit<DatePickerProps, 'popupProps'>

export const DatePickerContext = createContext<DatepickerContextType>({
  mode: 'single',
  onChange: () => {
  },
  value: [],
  format: DateFormat.Local
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