import React from 'react';
import {TableHeadProps} from '../Table.types.tsx';
import {useTableContext} from '../Table.utils.tsx';
import {twMerge} from 'tailwind-merge';

const Body: React.FC<TableHeadProps> = ({className, ...props}) => {
  const {cellClassName} = useTableContext();

  return (
    <tbody
      {...props}
      className={twMerge(cellClassName, className)}
    />
  );
};

export default Body;
