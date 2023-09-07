import {useDatePickerContext} from '@rehookify/datepicker';
import {CalendarButton} from '../CalendarButton.tsx';
import CalendarGrid from '../Grid.tsx';
import {FC} from 'react';
import {View, ViewProps} from '../../DatePicker.types.ts';
import {useDatePicker} from '../../Datepicker.Context.tsx';

const Time: FC<ViewProps> = () => {
  const {data, propGetters} = useDatePickerContext();
  const {time} = data;
  const {timeButton} = propGetters;
  const {setView} = useDatePicker();

  return (
    <CalendarGrid className='overflow-x-hidden overflow-y-auto gap-0'>
      {time.map(t => {
        const timeProps = timeButton(t, {onClick: () => setView(View.Day)});

        return (
          <CalendarButton
            key={t.$date.toString()}
            {...timeProps}
            selected={t.selected}
          >
            {t.time}
          </CalendarButton>
        );
      })}
    </CalendarGrid>
  );
};

export default Time;