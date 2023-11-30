import {FC, useMemo} from 'react';
import {ListItemProps} from './List.types.ts';
import {twMerge} from 'tailwind-merge';

const ListItem: FC<ListItemProps> = ({className, size, ...props}) => {
  const sizeClassName = useMemo<string>(() => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1';
      case 'lg':
        return 'px-4 py-3';
      default:
        return 'px-3 py-2';
    }
  }, [size]);

  return (
    <li
      className={twMerge(
        'hover:bg-gray-100 rounded-sm cursor-pointer',
        sizeClassName,
        className
      )}
      {...props}
    />
  );
};

export default ListItem;