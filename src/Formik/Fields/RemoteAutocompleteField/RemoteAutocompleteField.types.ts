import {FieldProps, FieldSlotProps, UseFieldProps} from '../Field.types.tsx';
import {RemoteAutocompleteProps} from '../../../Forms/RemoteAutocomplete/RemoteAutocomplete.types.ts';

export type RemoteAutocompleteFieldProps<ResponseData, Value, Multiple extends boolean | undefined> =
  RemoteAutocompleteProps<ResponseData, Value, Multiple>
  & UseFieldProps

export type RemoteAutocompleteFieldGroupProps<ResponseData, Value, Multiple extends boolean | undefined> = {
  slotProps?: {
    root?: FieldSlotProps<FieldProps>
  }
} & FieldProps & RemoteAutocompleteProps<ResponseData, Value, Multiple>