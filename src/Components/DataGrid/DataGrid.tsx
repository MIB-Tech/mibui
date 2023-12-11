import {useState} from 'react';
import {Table, TableBody, TableFooter, TableHead, TableHeadCell, TableRow, TableRowCell} from '../Table';
import {DataGridProps} from './DataGrid.types.tsx';
import {ClickAwayListener} from '@mui/base';
import {Input, InputNumber} from '../../Forms';
import {twMerge} from 'tailwind-merge';
import {ColumnType, MappedColumn} from './Column/Column.types.ts';
import {StringColumnFormat} from './Column/String/String.types.ts';
import ColumnHeaderTitle from './Column/Column.Header.Title.tsx';
import ColumnCellContent from './Column/Column.Cell.Content.tsx';

const DataGrid = <T extends object>({columns, value = [], onChange, ...props}: DataGridProps<T>) => {
  const [focused, setFocused] = useState<{ rowIndex: number, field: string }>();

  const changeFocus = ({rowIndex, columnIndex}: { rowIndex: number, columnIndex: number }) => {
    const nextMappedColumn = columns.find((c, i) => {
      if (i <= columnIndex) return false;
      if (!('field' in c)) return false;

      return c.editable;
    }) as MappedColumn<T> || undefined;
    if (nextMappedColumn) {
      setFocused({rowIndex, field: nextMappedColumn.field});
    } else {
      setFocused(undefined);
    }
  };

  return (
    <Table {...props}>
      <TableHead className='whitespace-nowrap'>
        {columns.map((column, index) => (
          <TableHeadCell key={index} className={column.className}>
            <ColumnHeaderTitle column={column}/>
          </TableHeadCell>
        ))}
      </TableHead>
      <TableBody>
        {value.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((column, columnIndex) => {
              const isMapped = 'field' in column;
              const isFocused = isMapped && focused?.rowIndex === rowIndex && focused.field === column.field;
              const isEditable = isMapped && column.editable;

              return (
                <TableRowCell
                  key={columnIndex}
                  className={twMerge(
                    'truncate p-0',
                    // isFocused && 'ring-2',
                    !isFocused && isEditable && 'ring-inset hover:ring-1 ring-primary-600  cursor-pointer',
                    isFocused && 'h-full',
                    column.className,
                  )}
                  onClick={() => {
                    if (!isEditable) return;

                    const {field} = column;
                    setFocused({rowIndex, field});
                  }}
                >
                  {isMapped ?
                    <>
                      {isFocused ? (
                        <ClickAwayListener onClickAway={() => setFocused(undefined)}>
                          <div>
                            {column.slots?.control ?
                              column.slots.control() :
                              <>
                                {(!column.type || column.type === ColumnType.String) && (
                                  <Input
                                    className='rounded-none'
                                    multiline={column.format === StringColumnFormat.Text}
                                    autoFocus
                                    value={row[column.field]}
                                    onChange={e => {
                                      onChange?.(
                                        value.map((r, _rowIndex) => {
                                          if (focused && focused.rowIndex === _rowIndex) {
                                            return {
                                              ...r,
                                              [focused.field]: e.target.value,
                                            };
                                          }
                                          return r;
                                        })
                                      );
                                    }}
                                    onKeyDown={({key}) => key === 'Tab' && changeFocus({rowIndex, columnIndex})}
                                  />
                                )}
                                {column.type === ColumnType.Number && (
                                  <InputNumber
                                    step={0.01}
                                    className='rounded-none'
                                    autoFocus
                                    value={row[column.field]}
                                    onChange={(_, val) => {
                                      console.log(val)
                                      onChange?.(
                                        value.map((r, _rowIndex) => {
                                          if (focused && focused.rowIndex === _rowIndex) {
                                            return {
                                              ...r,
                                              [focused.field]: val,
                                            };
                                          }
                                          return r;
                                        })
                                      );
                                    }}
                                    onKeyDown={({key}) => key === 'Tab' && changeFocus({rowIndex, columnIndex})}
                                  />
                                )}
                              </>
                            }
                          </div>
                        </ClickAwayListener>
                      ) : (
                        <div className='m-1'>
                          <ColumnCellContent
                            rowIndex={rowIndex}
                            column={column}
                            row={row}
                          />
                        </div>
                      )}
                    </> :
                    <div className='m-1'>
                      <ColumnCellContent
                        rowIndex={rowIndex}
                        column={column}
                        row={row}
                      />
                    </div>
                  }

                </TableRowCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          {columns.map((column, index) => (
            <TableRowCell key={index}>
              {'field' in column && (
                <>
                  {column.type === ColumnType.Number && value?.reduce((a, row) => {
                    return a + (row[column.field] as number);
                  }, 0)}
                </>
              )}
            </TableRowCell>
          ))}
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default DataGrid;