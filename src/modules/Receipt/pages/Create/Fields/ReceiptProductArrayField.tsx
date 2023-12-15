import {useFormikContext} from 'formik';
import DataGrid from '../../../../../Components/DataGrid/DataGrid.tsx';
import Modal from '../../../../../Components/Modal/Modal.tsx';
import {Button} from '../../../../../Components';
import {useMemo, useState} from 'react';
import {Column, ColumnType} from '../../../../../Components/DataGrid/Column/Column.types.ts';
import {StringColumnFormat} from '../../../../../Components/DataGrid/Column/String/String.types.ts';
import {PurchaseOrderFormValue, ReceiptProductFormValue} from '../Page.types.ts';
import {NumberUnit} from '../../../../../Components/DataGrid/Column/Number/Number.Unit.tsx';


export const ReceiptProductArrayField = () => {
  const [activeIndex, setActiveIndex] = useState<number>();
  const {values, setFieldValue} = useFormikContext<PurchaseOrderFormValue>();
  const {receiptProducts} = values;
  const currencyCode = 'MAD'; // TODO;
  const columns = useMemo<Array<Column<ReceiptProductFormValue>>>(() => {
    const columns: Array<Column<ReceiptProductFormValue>> = [
      // {
      //   renderCell: ({}, index) => (
      //     <FieldArray name='receiptProducts'>
      //       {({remove}) => (
      //         <IconButton
      //           iconElement={XMarkIcon}
      //           variant='clean'
      //           color='error'
      //           size='sm'
      //           onClick={() => remove(index)}
      //           tabIndex={-1}
      //         />
      //       )}
      //     </FieldArray>
      //   )
      // },
      {
        header: 'N°',
        // editable: true,
        renderCell: (_, index) => <div className='w-10'>{index + 1}</div>
      },
      {
        field: 'designation',
        className: '!w-72',
        format: StringColumnFormat.Text,
        header: 'Designation',
        // editable: true,
        renderCell: ({designation}) => <div className='!w-72 truncate'>{designation}</div>
      },
      {
        field: 'address',
        className: '!w-72',
        format: StringColumnFormat.Text,
        header: 'Adresse',
        // editable: true,
        renderCell: ({designation}) => <div className='!w-72 truncate'>{designation}</div>
      },
      {
        field: 'quantity',
        type: ColumnType.Number,
        currencyCode: currencyCode,
        header: 'Quantité',
        // editable: true,
        renderFooterCell: () => (
          <NumberUnit
            measure=''
            value={receiptProducts.reduce((count, receiptProduct) => {

              return count + receiptProduct.quantity;
            }, 0)}
          />
        )
      }
    ];

    return columns;
  }, [receiptProducts, currencyCode]);

  return (
    <>
      <DataGrid
        // stickyColumn
        hoverable
        size='sm'
        bordered
        columns={columns}
        data={receiptProducts}
        onChange={value => setFieldValue('receiptProducts', value)}
        // className='table-fixed'
      />
      {typeof activeIndex === 'number' && (
        <Modal
          size='lg'
          open
          onClose={() => setActiveIndex(undefined)}
          title='Détail réception'
        >
          <div className='flex justify-end gap-2 mt-4'>
            {/*<Button variant='clean' onClick={() => {}}>Ajouter un produit</Button>*/}
            <Button
              onClick={() => setActiveIndex(undefined)}
            >
              Fermer
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};