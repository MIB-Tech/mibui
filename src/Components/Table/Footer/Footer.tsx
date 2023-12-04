import React from 'react';
import {TableHeadProps} from '../Table.types.tsx';
import {useTableContext} from '../Table.utils.tsx';
import {twMerge} from 'tailwind-merge';

const Footer: React.FC<TableHeadProps> = ({className, ...props}) => {
  const {cellClassName} = useTableContext();

  return (
    <tfoot
      {...props}
      className={twMerge(cellClassName, className)}
    />
  );
};

export default Footer;
