import {Column, ColumnType} from './Column.types.ts';
import {NumberFormat} from './Number/Number.types.ts';
import {FC} from 'react';
import {Icon} from '../../SvgIcon';
import {MinusIcon, PlusIcon} from '@heroicons/react/20/solid';
import {StringColumnFormat} from './String/String.types.ts';
import moment from 'moment';

type UnitProps = { value: number, measure?: string, precision?: number }
export const Unit: FC<UnitProps> = ({value, measure = 'MAD', precision = 2}) => (
  <span className='truncate'>{value.toFixed(precision)} <span className='text-gray-500 text-sm'>{measure}</span></span>
);

const ColumnCellContent = <T extends object>({column, row, rowIndex}: {
  column: Column<T>,
  row: T,
  rowIndex: number
}) => {
  const {renderCell, getValue} = column;

  if (renderCell) {
    return renderCell(row, rowIndex);
  }

  if (!('field' in column)) {
    return getValue?.(row, rowIndex) || 'TODO CALCULATED';
  }
  const {type, field} = column;

  const value = getValue?.(row, rowIndex) || row[field]

  switch (type) {
    case undefined:
    case ColumnType.String:
      switch (column.format) {
        case StringColumnFormat.Datetime:
          return (
            <>
              {moment(value).format('L')}
              <div className='text-gray-400'>
                {moment(value).format('LT')}
              </div>
            </>
          )
      }
      break;
    case ColumnType.Number:
      if (column.format) {
        return (
          <Unit
            value={value as number}
            measure={column.format === NumberFormat.Percent ? '%' : undefined}
          />
        );
      }
      break;
    case ColumnType.Boolean:
      return <Icon icon={value ? PlusIcon : MinusIcon} size={5}/>;
    case ColumnType.Object:
      return '';
    case ColumnType.Array:
      return '';
  }

  return value;
};

export default ColumnCellContent;