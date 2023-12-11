import {FieldArray, useField} from 'formik';
import DataGrid from '../../../../../Components/DataGrid/DataGrid.tsx';
import Modal from '../../../../../Components/Modal/Modal.tsx';
import {
  DesiredProductDataGridExample
} from '../../../../../pages/ApplicationUI/FormLayout/Examples/DesiredProductDataGridExample.tsx';
import {Button} from '../../../../../Components';
import {useMemo, useState} from 'react';
import {Column, ColumnType} from '../../../../../Components/DataGrid/Column/Column.types.ts';
import {IconButton} from '../../../../../Components/IconButton/IconButton.tsx';
import {ListBulletIcon, XMarkIcon} from '@heroicons/react/20/solid';
import {InputNumber, RemoteAutocomplete, Select} from '../../../../../Forms';
import {HydraCollection, HydraItem} from '../../../../types.ts';
import {NumberFormat} from '../../../../../Components/DataGrid/Column/Number/Number.types.ts';
import {Unit} from '../../../../../Components/DataGrid/Column/Column.Cell.Content.tsx';
import {StringColumnFormat} from '../../../../../Components/DataGrid/Column/String/String.types.ts';
import {DiscountType} from '../../../../Discount/Model.ts';
import {PurchaseOrderProductFormValue} from '../Page.types.ts';


export const ProductArrayField = () => {
  const [open, setOpen] = useState<boolean>();
  const [{value}, , {setValue}] = useField<Array<PurchaseOrderProductFormValue>>({name: 'purchaseOrderProducts'});

  const columns = useMemo<Array<Column<PurchaseOrderProductFormValue>>>(() => {
    const columns: Array<Column<PurchaseOrderProductFormValue>> = [
      {
        className: 'w-20',
        renderCell: ({}, index) => (
          <FieldArray name='purchaseOrderProducts'>
            {({remove})=>(
              <div className='flex space-x-2'>
                <IconButton
                  iconElement={XMarkIcon}
                  variant='clean'
                  color='error'
                  size='sm'
                  onClick={() => remove(index)}
                />
                <IconButton
                  iconElement={ListBulletIcon}
                  variant='clean'
                  size='sm'
                  onClick={() => setOpen(true)}
                />
              </div>
            )}
          </FieldArray>
        )
      },
      {header: 'N°', editable: true, renderCell: (_, index) => index + 1},
      {
        field: 'product',
        type: ColumnType.Object,
        header: 'Produit',
        editable: true,
        className: '!w-40',
        renderCell: ({product}) => product?.['@title'],
        slots: {
          control: () => (
            <div className='z-50'>
              <RemoteAutocomplete<HydraCollection, HydraItem, false>
                endpoint='http://localhost:84/products/base'
                getOptions={response => response['hydra:member']}
                getOptionLabel={option => option['@title']}
                autoFocus
                openOnFocus
              />
            </div>
          )
        }
      },
      {field: 'designation', format: StringColumnFormat.Text, header: 'Designation', editable: true},
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
              openOnFocus
              options={[0, 7, 10, 14, 20]}
              getOptionLabel={option => `${option} %`}
            />
          )
        }
      },
      // {
      //   header: 'Acheteur',
      //   renderCell: ({buyer}) => buyer?.['@title']
      // },
      {
        header: 'Mnt brut HT',
        renderCell: ({grossPrice, quantity}) => <Unit value={grossPrice * quantity}/>,
      },
      {
        header: 'Mnt TTC',
        renderCell: ({grossPrice, quantity, vatRate}) => <Unit value={(grossPrice * quantity) * (1 + vatRate) / 100}/>,
      },
      {field: 'note', header: 'Commentaire', editable: true, format: StringColumnFormat.Text},
    ];

    return columns;
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
        className='min-w-full'
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