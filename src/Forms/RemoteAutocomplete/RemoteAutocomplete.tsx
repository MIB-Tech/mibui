import {Autocomplete} from '../Autocomplete';
import {RemoteAutocompleteProps} from './RemoteAutocomplete.types.ts';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const RemoteAutocomplete = <ResponseData, Value, Multiple extends boolean | undefined>(
  {endpoint, getOptions, ...props}: RemoteAutocompleteProps<ResponseData, Value, Multiple>
) => {
  const {data} = useQuery({
    queryKey: [endpoint],
    queryFn: () => axios.get<ResponseData>(endpoint)
  });
  const options = data?.data ? getOptions(data.data) : []

  return (
    <Autocomplete
      {...props}
      options={options}
    />
  );
};

export default RemoteAutocomplete;