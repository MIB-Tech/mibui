import {useMemo, useState} from 'react';
import DataGrid from '../../../../Components/DataGrid/DataGrid.tsx';
import {DesiredProduct, PURCHASE_ORDER_PRODUCT_1, PURCHASE_ORDER_PRODUCT_2} from './types.ts';
import {Column, ColumnType} from '../../../../Components/DataGrid/Column/Column.types.ts';

const initialValues: Array<DesiredProduct> = [
  {
    id: 1,
    designation: PURCHASE_ORDER_PRODUCT_1.product.designation,
    quantity: 4,
    address: '',
    status: '',
    purchaseOrderProduct: PURCHASE_ORDER_PRODUCT_1
  },
  {
    id: 3,
    designation: PURCHASE_ORDER_PRODUCT_1.product.designation,
    quantity: 6,
    address: '',
    status: '',
    purchaseOrderProduct: PURCHASE_ORDER_PRODUCT_1
  },
  {
    id: 2,
    designation: PURCHASE_ORDER_PRODUCT_2.product.designation,
    quantity: PURCHASE_ORDER_PRODUCT_2.quantity,
    address: '',
    status: '',
    purchaseOrderProduct: PURCHASE_ORDER_PRODUCT_2
  }
];


export const DesiredProductDataGridExample = () => {
  const [value, setValue] = useState<Array<DesiredProduct>>(initialValues);
  const columns = useMemo<Array<Column<DesiredProduct>>>(() => {

    return [
      {
        header: 'Action',
        renderCell: ({}) => (
          <>
          </>
        )
      },
      {header: 'Produit', renderCell: ({purchaseOrderProduct}) => purchaseOrderProduct.product?.designation},
      {field: 'designation', header: 'Designation', editable: true},
      {field: 'address', header: 'Adresse de rec.', editable: true},
      {field: 'quantity', header: 'Qte', editable: true, type: ColumnType.Number},
      {field: 'status', header: 'Etat de réception', editable: true, type: ColumnType.String},
    ];
  }, []);

  return (
    <>
      <DataGrid
        stickyHeader
        stickyColumn
        hoverable
        size='sm'
        bordered
        columns={columns}
        value={value}
        onChange={setValue}
      />
    </>
  );
};