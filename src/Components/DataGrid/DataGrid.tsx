import {useState} from 'react';
import {Table, TableBody, TableFooter, TableHead, TableHeadCell, TableRow, TableRowCell} from '../Table';
import {DataGridProps} from './DataGrid.types.tsx';
import {ClickAwayListener} from '@mui/base';
import {Input} from '../../Forms';
import {twMerge} from 'tailwind-merge';
import {ColumnType, MappedColumn, SetFieldValueType, SetRowValueType} from './Column/Column.types.ts';
import {StringColumnFormat} from './Column/String/String.types.ts';
import ColumnHeaderTitle from './Column/Column.Header.Title.tsx';
import ColumnCellContent from './Column/Column.Cell.Content.tsx';

const DataGrid = <T extends object>({columns, data = [], onChange, ...props}: DataGridProps<T>) => {
  const [focused, setFocused] = useState<{ rowIndex: number, field: keyof T }>();

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

  const setRowValue: SetRowValueType = ({rowIndex, value}) => {
    onChange?.(
      data.map((r, _rowIndex) => {
        if (rowIndex === _rowIndex) {
          return value;
        }

        return r;
      })
    );
  };
  const setFieldValue: SetFieldValueType = ({rowIndex, field, value}) => {
    onChange?.(
      data.map((r, _rowIndex) => {
        if (rowIndex === _rowIndex) {
          return {
            ...r,
            [field]: value,
          };
        }
        return r;
      })
    );
  };


  return (
    <ClickAwayListener onClickAway={() => setFocused(undefined)}>
      <div>
        <Table {...props}>
          <TableHead className='whitespace-nowrap'>
            {columns.map((column, index) => (
              <TableHeadCell key={index} className={twMerge('truncate', column.className)}>
                <ColumnHeaderTitle column={column}/>
              </TableHeadCell>
            ))}
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column, columnIndex) => {
                  const isMapped = 'field' in column;
                  const isFocused = isMapped && focused?.rowIndex === rowIndex && focused.field === column.field;
                  const isEditable = isMapped && column.editable;
                  const value = 'field' in column && row[column.field];
                  const onKeyDown = () => {
                    changeFocus({rowIndex, columnIndex});
                  };

                  return (
                    <TableRowCell
                      key={columnIndex}
                      className={twMerge(
                        'p-0',
                        // isFocused && 'ring-2',
                        !isFocused && isEditable && 'ring-inset hover:ring-1 ring-primary-600  cursor-pointer',
                        isFocused && 'h-full'
                      )}
                      onClick={() => {
                        if (!isEditable) return;

                        const {field} = column;
                        setFocused({rowIndex, field});
                      }}
                    >
                      {isMapped ?
                        <>
                          {isFocused ?
                            <>
                              {column.slots?.control ?
                                column.slots.control({
                                  setRowValue,
                                  setFieldValue,
                                  rowIndex,
                                  value,
                                  changeFocus: () => changeFocus({rowIndex, columnIndex})
                                }) :
                                <>
                                  {(!column.type || column.type === ColumnType.String) && (
                                    <Input
                                      className='rounded-none'
                                      multiline={column.format === StringColumnFormat.Text}
                                      autoFocus
                                      value={value}
                                      onChange={e => {
                                        setFieldValue({rowIndex, field: focused.field, value: e.target.value});
                                      }}
                                      onKeyDown={({key}) => key === 'Tab' && onKeyDown()}
                                    />
                                  )}
                                  {column.type === ColumnType.Number && (
                                    <Input
                                      type='number'
                                      className='rounded-none'
                                      autoFocus
                                      value={value}
                                      onChange={e => {
                                        setFieldValue({
                                          rowIndex,
                                          field: focused.field,
                                          value: parseFloat(e.target.value)
                                        });
                                      }}
                                      onKeyDown={({key}) => key === 'Tab' && onKeyDown()}
                                    />
                                  )}
                                </>
                              }
                            </> :
                            <div className='mx-2'>
                              <ColumnCellContent
                                rowIndex={rowIndex}
                                column={column}
                                row={row}
                              />
                            </div>
                          }
                        </> :
                        <div className='mx-2'>
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
                  {column.renderFooterCell?.()}
                </TableRowCell>
              ))}
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </ClickAwayListener>
  );
};

export default DataGrid;