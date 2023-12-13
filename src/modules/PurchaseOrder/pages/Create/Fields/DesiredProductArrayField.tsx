import {FieldArray, useField} from 'formik';
import DataGrid from '../../../../../Components/DataGrid/DataGrid.tsx';
import {FC, useMemo} from 'react';
import {Column, ColumnType} from '../../../../../Components/DataGrid/Column/Column.types.ts';
import {IconButton} from '../../../../../Components/IconButton/IconButton.tsx';
import {XMarkIcon} from '@heroicons/react/20/solid';
import {DesiredProductFormValue} from '../Page.types.ts';
import {StringColumnFormat} from '../../../../../Components/DataGrid/Column/String/String.types.ts';
import {HydraItem} from '../../../../types.ts';
import {NumberFormat} from '../../../../../Components/DataGrid/Column/Number/Number.types.ts';

export const DesiredProductArrayField: FC<{ index: number }> = ({index}) => {
  const [{value: product}] = useField<HydraItem>({name: `purchaseOrderProducts.${index}.product`});
  const [{value}, , {setValue}] = useField<Array<DesiredProductFormValue>>({name: `purchaseOrderProducts.${index}.desiredProducts`});

  const columns = useMemo<Array<Column<DesiredProductFormValue>>>(() => {
    const columns: Array<Column<DesiredProductFormValue>> = [
      {
        header: 'Action',
        renderCell: ({}, index) => (
          <FieldArray name={`purchaseOrderProducts.${index}.desiredProducts`}>
            {({remove}) => (
              <div className='flex space-x-2 w-20'>
                <IconButton
                  iconElement={XMarkIcon}
                  variant='clean'
                  color='error'
                  size='sm'
                  onClick={() => remove(index)}
                />
              </div>
            )}
          </FieldArray>
        )
      },
      {
        header: 'Produit',
        renderCell: () => (
          <div className='!w-52 truncate'>{product?.['@title']}</div>
        ),
      },
      {
        field: 'designation',
        format: StringColumnFormat.Text,
        header: 'Designation',
        editable: true,
        renderCell: ({designation}) => <div className='!w-52 truncate'>{designation}</div>
      },
      {
        field: 'address',
        header: 'Adresse de réc.',
        format: StringColumnFormat.Text,
        editable: true
      },
      {
        field: 'quantity',
        header: 'Qté',
        type: ColumnType.Number,
        format: NumberFormat.Amount,
        editable: true
      },
      {
        field: 'status',
        header: 'État de réception'
      },
    ];

    return columns;
  }, []);

  return (
    <DataGrid
      stickyColumn
      hoverable
      size='sm'
      bordered
      columns={columns}
      data={value}
      onChange={setValue}
      className='table-fixed'
    />
  );
};