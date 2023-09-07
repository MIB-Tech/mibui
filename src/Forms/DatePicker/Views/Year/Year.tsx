import {useDatePickerContext} from '@rehookify/datepicker';
import {FC} from 'react';
import {CalendarButton} from '../CalendarButton.tsx';
import CalendarGrid from '../Grid.tsx';
import {View, ViewProps} from '../../DatePicker.types.ts';
import {useDatePicker} from '../../Datepicker.Context.tsx';

const Year: FC<ViewProps> = () => {
  const {data, propGetters} = useDatePickerContext();
  const {years} = data;
  const {yearButton} = propGetters;
  const {setView} = useDatePicker();

  return (
    <CalendarGrid className='grid-cols-3'>
      {years.map(year => {
        const yearProps = yearButton(year);

        return (
          <CalendarButton
            key={year.$date.toString()}
            {...yearProps}
            selected={year.selected}
            onClick={e=>{
              setView(View.Day)
              yearProps.onClick?.(e)
            }}
          >
            {year.year}
          </CalendarButton>
        );
      })}
    </CalendarGrid>
  );
};

export default Year;