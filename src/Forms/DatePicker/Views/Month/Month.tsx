import {useDatePickerContext} from '@rehookify/datepicker';
import {FC} from 'react';
import {CalendarButton} from '../CalendarButton.tsx';
import CalendarGrid from '../Grid.tsx';
import {View, ViewProps} from '../../DatePicker.types.ts';
import {useDatePicker} from '../../Datepicker.Context.tsx';

const Month: FC<ViewProps> = () => {
  const {data, propGetters} = useDatePickerContext();
  const {months} = data;
  const {monthButton} = propGetters;
  const {setView} = useDatePicker();

  return (
    <CalendarGrid className='grid-cols-3'>
      {months.map(month => {
        const monthProps = monthButton(month, {onClick: () => setView(View.Day)});

        return (
          <CalendarButton
            key={month.$date.toString()}
            {...monthProps}
            selected={month.selected}
            className='capitalize'
          >
            {month.month}
          </CalendarButton>
        );
      })}
    </CalendarGrid>
  );
};

export default Month;