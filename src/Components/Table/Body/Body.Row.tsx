import React from 'react';
import {useTableContext} from '../Table.utils.tsx';
import {TableRowProps} from '../Table.types.tsx';
import {twMerge} from 'tailwind-merge';


const BodyRow: React.FC<TableRowProps> = ({className, ...props}) => {
  const {borderClassName} = useTableContext();

  return (
    <tr
      {...props}
      className={twMerge(
        'group',
        borderClassName,
        className,
      )}
    />
  );
};
export default BodyRow;
