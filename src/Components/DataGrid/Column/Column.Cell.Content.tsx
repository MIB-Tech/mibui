import {Column, ColumnType} from './Column.types.ts';
import {NumberFormat} from './Number/Number.types.ts';
import {Icon} from '../../SvgIcon';
import {MinusIcon, PlusIcon} from '@heroicons/react/20/solid';
import {StringColumnFormat} from './String/String.types.ts';
import moment from 'moment';
import {NumberUnit} from './Number/Number.Unit.tsx';

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
          );
      }

      return value
    case ColumnType.Number:
      if (column.format) {
        return (
          <NumberUnit
            value={column.format === NumberFormat.Percent ? (value || 0) * 100 : (value || 0)}
            measure={column.format === NumberFormat.Percent ? '%' : column.currencyCode}
            precision={column.precision}
          />
        );
      }

      return value
    case ColumnType.Boolean:
      return <Icon icon={value ? PlusIcon : MinusIcon} size={5}/>;
    case ColumnType.Object:
      return '';
    case ColumnType.Array:
      return '';
  }
};

export default ColumnCellContent;