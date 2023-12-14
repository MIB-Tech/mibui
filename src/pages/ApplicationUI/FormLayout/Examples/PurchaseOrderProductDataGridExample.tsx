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
import {InputNumber, Option, RemoteAutocomplete, Select} from '../../../../Forms';
import {IconButton} from '../../../../Components/IconButton/IconButton.tsx';
import {ListBulletIcon} from '@heroicons/react/20/solid';
import {HydraCollection, HydraItem} from '../../../../modules';
import {NumberUnit} from '../../../../Components/DataGrid/Column/Number/Number.Unit.tsx';

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
      {header: 'N°', editable: true, renderCell: (_, index) => index + 1},
      {
        field: 'product',
        type: ColumnType.Object,
        header: 'Produit',
        editable: true,
        renderCell: ({product}) => product?.code,
        slots: {
          control: () => (
            <RemoteAutocomplete<HydraCollection<AbstractProduct>, HydraItem<AbstractProduct>, false>
              endpoint='/products/base'
              getOptions={response => response['hydra:member']}
              getOptionLabel={option => option['@title']}
              autoFocus
              openOnFocus
            />
          )
        }
      },
      {field: 'designation', header: 'Designation', editable: true},
      {
        field: 'quantity',
        type: ColumnType.Number,
        format: NumberFormat.Amount,
        header: 'Qte acheté',
        editable: true
      },
      {
        field: 'discount',
        header: 'Remise',
        type: ColumnType.Object,
        editable: true,
        renderCell: ({discount}) => discount && (
          <NumberUnit
            value={discount.value}
            measure={discount.discountType === DiscountType.Amount ? 'MAD' : '%'}
          />
        ),
        slots: {
          control: () => (
            <div className='grid gap-3'>
              <InputNumber autoFocus placeholder='Valeur'/>
              <Select>
                <Option value={DiscountType.Amount}>MAD</Option>
                <Option value={DiscountType.Percent}>%</Option>
              </Select>
            </div>
          )
        }
      },
      {
        field: 'grossPrice',
        header: 'Prix brut',
        editable: true,
        type: ColumnType.Number,
        format: NumberFormat.Amount
      },
      {
        field: 'netPrice',
        header: 'Prix net',
        editable: true,
        type: ColumnType.Number,
        format: NumberFormat.Amount
      },
      {
        field: 'vatRate',
        header: 'Taux TVA',
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
              // openOnFocus
              // options={[0, 7, 10, 14, 20]}
              // getOptionLabel={option => `${option} %`}
            />
          )
        }
      },
      {
        header: 'Acheteur',
        renderCell: ({buyer}) => <span className='truncate'>{buyer.lastName} {buyer.firstName}</span>
      },
      {
        header: 'Mnt brut HT',
        type: ColumnType.Number,
        format: NumberFormat.Amount,
        getValue: ({netPrice, vatRate}) => netPrice * (1 + (vatRate / 100))
      },
      {
        header: 'Mnt TTC',
        type: ColumnType.Number,
        format: NumberFormat.Amount,
        getValue: ({netPrice, vatRate}) => netPrice * (1 + (vatRate / 100))
      },
      {field: 'note', header: 'Commentaire', editable: true, format: StringColumnFormat.Text},
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
        data={value}
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