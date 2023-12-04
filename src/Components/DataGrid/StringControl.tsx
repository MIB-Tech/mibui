import {FC, useState} from 'react';
import {Input} from '../../Forms';

const StringControl: FC<{ value?: string }> = ({value = ''}) => {
  const [tmpValue, setTmpValue] = useState<string>(value);

  return (
    <Input
      autoFocus
      value={tmpValue}
      onChange={event => setTmpValue(event.target.value)}
    />
  );
};

export default StringControl;
