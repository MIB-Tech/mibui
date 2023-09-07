import {DPCalendar, useDatePickerContext} from '@rehookify/datepicker';
import {CalendarButton} from '../CalendarButton.tsx';
import CalendarGrid from '../Grid.tsx';
import {FC} from 'react';
import {twMerge} from 'tailwind-merge';
import {VariantType} from '../../../../@types/Variant.ts';
import {ColorType} from '../../../../@types/Color.ts';

const Day: FC<Pick<DPCalendar, 'days'>> = ({days}) => {
  const {data, propGetters} = useDatePickerContext();

  return (
    <CalendarGrid className='grid-cols-7 gap-0.5 pt-1'>
      {data.weekDays.map(day => <div key={day} className='text-xs text-center'>{day}</div>)}
      {days.map(day => {
        const {selected, range, inCurrentMonth} = day;
        let variant: VariantType | undefined;
        let color: ColorType | undefined;
        if (!selected && range === 'in-range' || range === 'will-be-in-range') {
          variant = 'light';
          color = 'primary';
        }

        return (
          <div key={day.$date.toString()}>
            <CalendarButton
              square
              outline={day.now}
              className={twMerge(
                `leading-4`,
                !inCurrentMonth && 'opacity-50',
                range && 'rounded-none',
                (range === 'range-start' || range === 'will-be-range-start') && 'rounded-s',
                (range === 'range-end' || range === 'will-be-range-end') && 'rounded-e'
              )}
              {...propGetters.dayButton(day)}
              selected={selected}
              variant={variant}
              color={color}
            >
              {day.day}
            </CalendarButton>
          </div>
        );
      })}
    </CalendarGrid>
  );
};

export default Day;

