import {useMemo, useState} from 'react';
import DataGrid from '../../../../Components/DataGrid/DataGrid.tsx';
import {Button} from '../../../../Components';
import Modal from '../../../../Components/Modal/Modal.tsx';
import {DesiredProductDataGridExample} from './DesiredProductDataGridExample.tsx';
import {
  AbstractProduct,
  DiscountType,
  PURCHASE_ORDER_PRODUCT_1,
  PURCHASE_ORDER_PRODUCT_2,
  PurchaseOrderProduct
} from './types.ts';
import {Column, ColumnType} from '../../../../Components/DataGrid/Column/Column.types.ts';
import {StringColumnFormat} from '../../../../Components/DataGrid/Column/String/String.types.ts';
import {NumberFormat} from '../../../../Components/DataGrid/Column/Number/Number.types.ts';
import {InputNumber, RemoteAutocomplete, Select} from '../../../../Forms';
import {IconButton} from '../../../../Components/IconButton/IconButton.tsx';
import {ListBulletIcon} from '@heroicons/react/20/solid';
import {Unit} from '../../../../Components/DataGrid/Column/Column.Cell.Content.tsx';

const initialValues: Array<PurchaseOrderProduct> = [
  PURCHASE_ORDER_PRODUCT_1,
  PURCHASE_ORDER_PRODUCT_2,
];

export const PurchaseOrderProductDataGridExample = () => {
  const [value, setValue] = useState<Array<PurchaseOrderProduct>>(initialValues);
  const [open, setOpen] = useState<boolean>();
  const columns = useMemo<Array<Column<PurchaseOrderProduct>>>(() => {
    const COLUMNS: Array<Column<PurchaseOrderProduct>> = [
      {
        renderCell: () => (
          <IconButton
            iconElement={ListBulletIcon}
            variant='clean'
            size='sm'
            onClick={() => setOpen(true)}
          />
        )
      },
      {headerName: 'N°', editable: true, renderCell: (_, index) => index + 1},
      {
        field: 'product',
        type: ColumnType.Object,
        headerName: 'Produit',
        editable: true,
        renderCell: ({product}) => product?.code,
        slots: {
          control: () => (
            <RemoteAutocomplete<{ 'hydra:member': Array<AbstractProduct & {"@title": string}> }, AbstractProduct & {"@title": string}, false>
              endpoint='http://localhost:84/products/base'
              getOptions={response => response['hydra:member']}
              getOptionLabel={option => option['@title']}
              autoFocus
              openOnFocus
            />
          )
        }
      },
      {field: 'designation', headerName: 'Designation', editable: true},
      {
        field: 'quantity',
        type: ColumnType.Number,
        format: NumberFormat.Amount,
        headerName: 'Qte acheté',
        editable: true
      },
      {
        field: 'discount',
        headerName: 'Remise',
        type: ColumnType.Object,
        editable: true,
        renderCell: ({discount}) => discount && (
          <Unit
            value={discount.value}
            measure={discount.discountType === DiscountType.Amount ? 'MAD' : '%'}
          />
        ),
        slots: {
          control: () => (
            <div className='grid gap-3'>
              <InputNumber autoFocus placeholder='Valeur'/>
              <Select
                options={Object.values(DiscountType)}
                getOptionLabel={option => option === DiscountType.Amount ? 'MAD' : '%'}
              />
            </div>
          )
        }
      },
      {
        field: 'grossPrice',
        headerName: 'Prix brut',
        editable: true,
        type: ColumnType.Number,
        format: NumberFormat.Amount
      },
      {
        field: 'netPrice',
        headerName: 'Prix net',
        editable: true,
        type: ColumnType.Number,
        format: NumberFormat.Amount
      },
      {
        field: 'vatRate',
        headerName: 'Taux TVA',
        editable: true,
        type: ColumnType.Number,
        format: NumberFormat.Percent,
        slots: {
          control: () => (
            // <div className='w-64 px-3 pb-5'>
            //   <Slider
            //     autoFocus
            //     tooltipDisplay='none'
            //     step={null}
            //     max={20}
            //     marks={[0, 7, 10, 14, 20].map(value => ({value, label: `${value}%`}))}
            //   />
            // </div>
            <Select
              autoFocus
              openOnFocus
              options={[0, 7, 10, 14, 20]}
              getOptionLabel={option => `${option} %`}
            />
          )
        }
      },
      {
        headerName: 'Acheteur',
        renderCell: ({buyer}) => <span className='truncate'>{buyer.lastName} {buyer.firstName}</span>
      },
      {
        headerName: 'Mnt brut HT',
        type: ColumnType.Number,
        format: NumberFormat.Amount,
        getValue: ({netPrice, vatRate}) => netPrice * (1 + (vatRate / 100))
      },
      {
        headerName: 'Mnt TTC',
        type: ColumnType.Number,
        format: NumberFormat.Amount,
        getValue: ({netPrice, vatRate}) => netPrice * (1 + (vatRate / 100))
      },
      {field: 'note', headerName: 'Commentaire', editable: true, format: StringColumnFormat.Text},
    ]

    return COLUMNS;
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