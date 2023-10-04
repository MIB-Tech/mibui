import {useAutocomplete, UseAutocompleteReturnValue} from '@mui/base/useAutocomplete';
import {AutocompleteProps} from './Autocomplete.types.ts';
import {Input} from '../Input';
import {ChevronDownIcon, ChevronUpIcon, XMarkIcon} from '@heroicons/react/20/solid';
import {Badge} from '../../Components';
import {AutocompleteGroupOption} from './Autocomplete.Option.Group.tsx';
import {AdornmentIconButton} from '../InputGroup/AdornmentIconButton.tsx';
import {AutocompleteOption} from './Autocomplete.Option.tsx';
import {AutocompletePopper} from './Autocomplete.Popper.tsx';
import {AutocompleteOptionWrapper} from './Autocomplete.Option.Wrapper.tsx';
import {AutocompleteGroupedOption} from '@mui/base/useAutocomplete/useAutocomplete';
import {defaultGetOptionLabel} from './Autocomplete.utils.tsx';
import {AutocompleteListbox} from './Autocomplete.Listbox.tsx';
import {twMerge} from 'tailwind-merge';

const Autocomplete = <Value, Multiple extends boolean | undefined>(
  {renderOption, renderListbox, searchDisabled, ...props}: AutocompleteProps<Value, Multiple>
) => {
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    getPopupIndicatorProps,
    popupOpen,
    getClearProps,
    value,
    getTagProps,
  } = useAutocomplete<Value, Multiple, false, false>({
    ...props,
    disableCloseOnSelect: props.multiple ? true : props.disableCloseOnSelect,
  });
  const {
    getOptionLabel = defaultGetOptionLabel,
    disabled,
    readOnly,
    multiple,
    size,
    placeholder
  } = props;
  const hasClearIcon: boolean = !disabled && !readOnly && (multiple ? (Array.isArray(value) && value.length > 0) : !!value);


  return (
    <div className='relative'>
      <Input
        placeholder={placeholder}
        disabled={disabled}
        readOnly={searchDisabled || readOnly}
        slotProps={{
          root: getRootProps(),
          input: {
            ...getInputProps(),
            className: twMerge('w-auto', searchDisabled && 'cursor-pointer'),
            style: {
              maxWidth: '-webkit-fill-available'
            },
          }
        }}
        size={size}
        className={twMerge(
          'group flex-wrap items-center gap-2',
          searchDisabled && 'cursor-pointer'
        )}
        startAdornment={multiple && Array.isArray(value) && value.map((option, index) => {
          const {onDelete, ...tagProps} = getTagProps({index});

          return (
            <div key={tagProps.key}>
              <Badge
                {...tagProps}
                variant='light'
                closable={!disabled && !readOnly}
                onClose={() => onDelete(null)}
                size={size}
              >
                {getOptionLabel(option)}
              </Badge>
            </div>
          );
        })}
        endAdornment={(
          <div className='flex items-center justify-items-center gap-1 ms-auto flex-none'>
            {hasClearIcon && (
              <AdornmentIconButton
                iconElement={XMarkIcon}
                {...getClearProps()}
                color='secondary'
                size={size}
              />
            )}
            <AdornmentIconButton
              iconElement={popupOpen ? ChevronUpIcon : ChevronDownIcon}
              {...getPopupIndicatorProps()}
              color='primary'
              disabled={disabled}
              size={size}
            />
          </div>
        )}
      />
      {popupOpen && (
        <AutocompletePopper className={twMerge(searchDisabled && 'w-full')}>
          {renderListbox ?
            renderListbox({
              getListboxProps,
              groupedOptions,
              getOptionProps
            }) :
            <AutocompleteListbox {...getListboxProps()}>
              {groupedOptions.length === 0 && (
                <AutocompleteOptionWrapper className='text-gray-500'>
                  No Options
                </AutocompleteOptionWrapper>
              )}
              {groupedOptions.map((option, index) => (
                <Option
                  key={index}
                  index={index}
                  option={option}
                  getOptionProps={getOptionProps}
                  renderOption={(liProps, option1) => {
                    if (renderOption) {
                      return renderOption(liProps, option1);
                    }

                    return getOptionLabel(option1);
                  }}
                />
              ))}
            </AutocompleteListbox>
          }
        </AutocompletePopper>
      )}
    </div>
  );
};

const Option = <Value, >(
  props: {
    index: number,
    option: Value | AutocompleteGroupedOption<Value>
  } & Pick<AutocompleteProps<Value>, 'renderOption'>
    & Pick<UseAutocompleteReturnValue<Value>, 'getOptionProps'>
) => {
  const {option, index, renderOption, getOptionProps} = props;
  const isGroup = option && typeof option === 'object' && 'group' in option;
  if (isGroup) {
    return (
      <li key={index}>
        <ul>
          <AutocompleteGroupOption option={option}/>
          {option.options.map((option2, index2) => {
            const key = option.index + index2;

            return (
              <Option
                {...props}
                key={key}
                index={key}
                option={option2}
              />
            );
          })}
        </ul>
      </li>
    );
  }

  const optionProps = getOptionProps({option, index});

  return (
    <AutocompleteOption key={index} {...optionProps}>
      {renderOption?.(optionProps, option)}
    </AutocompleteOption>
  );
};

export default Autocomplete;