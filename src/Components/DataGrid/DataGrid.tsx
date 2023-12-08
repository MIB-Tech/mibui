import {useState} from 'react';
import {Table, TableBody, TableFooter, TableHead, TableHeadCell, TableRow, TableRowCell} from '../Table';
import Popover from '../Popover/Popover.tsx';
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
  const [tmpValue, setTmpValue] = useState<any>();

  return (
    <Table {...props}>
      <TableHead className='whitespace-nowrap'>
        {columns.map((column, index) => (
          <TableHeadCell key={index}>
            <ColumnHeaderTitle column={column}/>
          </TableHeadCell>
        ))}
      </TableHead>
      <TableBody>
        {value.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((column, columnIndex) => {
              const isMapped = 'field' in column;
              const isCurrent = isMapped && focused?.rowIndex === rowIndex && focused.field === column.field;
              const isEditable = isMapped && column.editable;

              return (
                <TableRowCell
                  key={columnIndex}
                  className={twMerge(
                    'truncate',
                    isCurrent && 'ring-2',
                    isEditable && 'ring-inset hover:ring-1 ring-primary-600  cursor-pointer',
                  )}
                  onClick={() => {
                    if (!isEditable) return;

                    const {field} = column;
                    setTmpValue(row[field]);
                    setFocused({rowIndex, field});
                  }}
                >
                  {isMapped ?
                    <>
                      {isCurrent ? (
                        <Popover
                          open
                          placement='bottom-start'
                          content={
                            <ClickAwayListener onClickAway={() => setFocused(undefined)}>
                              <div className='flex flex-col space-y-2'>
                                <div>
                                  <ColumnHeaderTitle column={column}/>
                                </div>
                                {column.slots?.control ?
                                  column.slots.control():
                                  <>
                                    {(!column.type || column.type === ColumnType.String) && (
                                      <Input
                                        multiline={column.format === StringColumnFormat.Text}
                                        autoFocus
                                        value={tmpValue}
                                        onChange={event => setTmpValue(event.target.value)}
                                        onKeyDown={e => {
                                          if (e.key === 'Enter' && onChange) {
                                            onChange(
                                              value.map((r, _rowIndex) => {
                                                if (focused && focused.rowIndex === _rowIndex) {
                                                  return {
                                                    ...r,
                                                    [focused.field]: tmpValue,
                                                  };
                                                }
                                                return r;
                                              })
                                            );

                                            const nextMappedColumn = columns.find((c, i) => {
                                              if (i <= columnIndex) return false;
                                              if (!('field' in c)) return false;

                                              return c.editable;
                                            }) as MappedColumn<T> || undefined;
                                            if (nextMappedColumn) {
                                              setTmpValue(row[nextMappedColumn.field]);
                                              setFocused({rowIndex, field: nextMappedColumn.field});
                                            } else {
                                              setFocused(undefined);
                                            }
                                          }
                                        }}
                                      />
                                    )}
                                    {column.type === ColumnType.Number && (
                                      <InputNumber
                                        autoFocus
                                        value={tmpValue}
                                        onChange={(_, value) => {

                                          setTmpValue(value);
                                        }}
                                        onKeyDown={e => {
                                          if (e.key === 'Enter' && onChange) {
                                            onChange(
                                              value.map((r, _rowIndex) => {
                                                if (focused && focused.rowIndex === _rowIndex) {
                                                  return {
                                                    ...r,
                                                    [focused.field]: tmpValue,
                                                  };
                                                }
                                                return r;
                                              })
                                            );

                                            const nextMappedColumn = columns.find((c, i) => {
                                              if (i <= columnIndex) return false;
                                              if (!('field' in c)) return false;

                                              return c.editable;
                                            }) as MappedColumn<T> || undefined;
                                            if (nextMappedColumn) {
                                              setTmpValue(row[nextMappedColumn.field]);
                                              setFocused({rowIndex, field: nextMappedColumn.field});
                                            } else {
                                              setFocused(undefined);
                                            }
                                          }
                                        }}
                                      />
                                    )}
                                  </>
                                }
                              </div>
                            </ClickAwayListener>
                          }
                        >
                          <div>
                            <ColumnCellContent
                              rowIndex={rowIndex}
                              column={column}
                              row={row}
                            />
                          </div>
                        </Popover>
                      ) : (
                        <ColumnCellContent
                          rowIndex={rowIndex}
                          column={column}
                          row={row}
                        />
                      )}
                    </> :
                    <ColumnCellContent
                      rowIndex={rowIndex}
                      column={column}
                      row={row}
                    />
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