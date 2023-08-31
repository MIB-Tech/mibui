import {Autocomplete} from '../../../Forms';
import {COLORS} from '../../../@types/Color.ts';
import {COLOR_WEIGHTS} from '../../../@types/Weight.ts';

export const ColorPickerAutocomplete = () => {

  return (
    <Autocomplete
      options={COLORS.reduce(
        (previousValue, currentValue) => {
          return [
            ...previousValue,
            ...COLOR_WEIGHTS.map(weight => `${currentValue}-${weight}`)
          ];
        },
        [] as string[]
      )}
      placeholder='Color Picker'
      groupBy={option => option.split('-')[0]}
      renderListbox={({getListboxProps, groupedOptions, getOptionProps}) => (
        <ul {...getListboxProps()} className='p-2 grid gap-y-3'>
          {groupedOptions.map((option, index) => {
            if (typeof option !== 'string') {
              const color = option.group;

              return (
                <li key={color}>
                  <ul>
                    <li className='capitalize'>
                      {color}
                    </li>
                    <li>
                      <ul className='flex gap-y-1 gap-x-2'>
                        {color === 'black' ?
                          <li
                            {...getOptionProps({option: color, index: option.index})}
                            className={`w-10 h-10 rounded-sm bg-${color} hover:ring-2 hover:ring-offset-1 hover:ring-gray-500`}
                          /> :
                          option.options.map((groupOption, groupOptionIndex) => {
                            const key = option.index + groupOptionIndex;

                            return (
                              <li
                                key={key}
                                {...getOptionProps({option: groupOption, index: key})}
                                className={`w-10 h-10 rounded-sm bg-${groupOption} hover:ring-2 hover:ring-offset-1 hover:ring-gray-500 hover:z-10`}
                              />
                            );
                          })
                        }
                      </ul>
                    </li>
                  </ul>
                </li>
              );
            }

            return (
              <li
                {...getOptionProps({option, index})}
                className={`w-10 h-10 rounded-sm  bg-${option}`}
              />
            );
          })}
        </ul>
      )}
    />
  );
};