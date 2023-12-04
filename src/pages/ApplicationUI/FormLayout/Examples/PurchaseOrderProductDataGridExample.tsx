import {FC, useMemo, useState} from 'react';
import DataGrid from '../../../../Components/DataGrid/DataGrid.tsx';
import {Button} from '../../../../Components';
import Modal from '../../../../Components/Modal/Modal.tsx';
import {DesiredProductDataGridExample} from './DesiredProductDataGridExample.tsx';
import {PURCHASE_ORDER_PRODUCT_1, PURCHASE_ORDER_PRODUCT_2, PurchaseOrderProduct} from './types.ts';
import {Column, ColumnType} from '../../../../Components/DataGrid/Column/Column.types.ts';
import {StringColumnFormat} from '../../../../Components/DataGrid/Column/StringColumn/StringColumn.types.ts';

const initialValues: Array<PurchaseOrderProduct> = [
  PURCHASE_ORDER_PRODUCT_1,
  PURCHASE_ORDER_PRODUCT_2,
];

type UnitProps = { value: number, measure?: string, precision?: number }
const Unit: FC<UnitProps> = ({value, measure = 'MAD', precision = 2}) => (
  <span className='truncate'>{value.toFixed(precision)} <span className='text-gray-500 text-sm'>{measure}</span></span>
);

export const PurchaseOrderProductDataGridExample = () => {
  const [value, setValue] = useState<Array<PurchaseOrderProduct>>(initialValues);
  const [open, setOpen] = useState<boolean>();
  const columns = useMemo<Array<Column<PurchaseOrderProduct>>>(() => {

    return [
      {
        headerName: 'Action',
        renderCell: ({}) => (
          <Button
            variant='clean'
            className='truncate'
            size='sm'
            onClick={() => setOpen(true)}
          >
            Détail réception
          </Button>
        )
      },
      {field: 'group1', headerName: 'Grp. 1', editable: true},
      {field: 'group2', headerName: 'Grp. 2', editable: true},
      {headerName: 'N°', editable: true, renderCell: (_, index) => index + 1},
      {field: 'product', headerName: 'Produit', editable: true, renderCell: ({product}) => product?.code},
      {field: 'designation', headerName: 'Designation', editable: true},
      {field: 'quantity', headerName: 'Qte acheté', editable: true, type: ColumnType.Number},
      {
        field: 'discount',
        headerName: 'Remise',
        // editable: true,
        renderCell: ({discount}) => discount && <Unit value={discount.value} measure='%' precision={0}/>
      },
      {
        field: 'grossPrice',
        headerName: 'Prix brut',
        editable: true,
        type: ColumnType.Number,
        renderCell: ({grossPrice}) => <Unit value={grossPrice}/>
      },
      {
        field: 'netPrice',
        headerName: 'Prix net',
        editable: true,
        type: ColumnType.Number,
        renderCell: ({netPrice}) => <Unit value={netPrice}/>
      },
      {
        field: 'vatRate',
        headerName: 'Taux TVA',
        editable: true,
        type: ColumnType.Number,
        renderCell: ({vatRate}) => <Unit value={vatRate} measure='%'/>
      },
      {
        headerName: 'Acheteur',
        renderCell: ({buyer}) => <span className='truncate'>{buyer.lastName} {buyer.firstName}</span>
      },
      {
        headerName: 'Mnt brut HT',
        renderCell: ({netPrice, vatRate}) => <Unit value={netPrice * (1 + (vatRate / 100))}/>
      },
      {
        headerName: 'Mnt net HT',
        renderCell: ({grossPrice, vatRate}) => <Unit value={grossPrice / (1 + (vatRate / 100))}/>,
      },
      {field: 'note', headerName: 'Commentaire', editable: true, format: StringColumnFormat.Text},
      {headerName: 'Mnt tenu de Compte (DH)', renderCell: ({}) => ''},
      {headerName: 'Mnt tenu de Transaction', renderCell: ({}) => ''},
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
      <Modal
        size='lg'
        open={open}
        onClose={() => setOpen(false)}
        title='Détail réception'
      >
        <DesiredProductDataGridExample/>
        <div className='flex justify-end gap-2 mt-4'>
          {/*<Button variant='clean' onClick={() => {}}>Ajouter un produit</Button>*/}
          <Button
            onClick={() => setOpen(false)}
          >
            Fermer
          </Button>
        </div>
      </Modal>
    </>
  );
};