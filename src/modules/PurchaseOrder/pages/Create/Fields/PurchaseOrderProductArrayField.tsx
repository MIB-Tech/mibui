import {FieldArray, useField} from 'formik';
import DataGrid from '../../../../../Components/DataGrid/DataGrid.tsx';
import Modal from '../../../../../Components/Modal/Modal.tsx';
import {Button} from '../../../../../Components';
import {useMemo, useState} from 'react';
import {Column, ColumnType} from '../../../../../Components/DataGrid/Column/Column.types.ts';
import {IconButton} from '../../../../../Components/IconButton/IconButton.tsx';
import {ListBulletIcon, XMarkIcon} from '@heroicons/react/20/solid';
import {Input, InputGroup, RemoteAutocomplete, Select} from '../../../../../Forms';
import {HydraCollection, HydraItem} from '../../../../types.ts';
import {NumberFormat} from '../../../../../Components/DataGrid/Column/Number/Number.types.ts';
import {StringColumnFormat} from '../../../../../Components/DataGrid/Column/String/String.types.ts';
import {DiscountType} from '../../../../Discount/Model.ts';
import {FormValue, PurchaseOrderProductFormValue} from '../Page.types.ts';
import {NumberUnit} from '../../../../../Components/DataGrid/Column/Number/Number.Unit.tsx';
import {useAuth} from '../../../../../pages/Auth/Login/Login.tsx';
import {DesiredProductArrayField} from './DesiredProductArrayField.tsx';
import {getInitPurchaseOrderProduct} from '../Page.utils.ts';
import {AutocompleteOption} from '../../../../../Forms/Autocomplete/Autocomplete.Option.tsx';
import {ModelCell} from '../../Listing/Page.tsx';
import {DiscountModel} from '../../../../Discount';

export const PurchaseOrderProductArrayField = () => {
  const {auth} = useAuth();
  const [activeIndex, setActiveIndex] = useState<number>();
  const [{value}, , {setValue}] = useField<Array<PurchaseOrderProductFormValue>>({name: 'purchaseOrderProducts'});
  const [{value: currency}] = useField<FormValue['currency']>({name: 'currency'});
  const currencyCode = currency?.['@title'] || 'MAD';
  const columns = useMemo<Array<Column<PurchaseOrderProductFormValue>>>(() => {
    const columns: Array<Column<PurchaseOrderProductFormValue>> = [
      {
        renderCell: ({}, index) => (
          <FieldArray name='purchaseOrderProducts'>
            {({remove}) => (
              <div className='flex space-x-2 w-20'>
                <IconButton
                  iconElement={XMarkIcon}
                  variant='clean'
                  color='error'
                  size='sm'
                  onClick={() => remove(index)}
                  tabIndex={-1}
                />
                <IconButton
                  iconElement={ListBulletIcon}
                  variant='clean'
                  size='sm'
                  onClick={() => setActiveIndex(index)}
                  tabIndex={-1}
                />
              </div>
            )}
          </FieldArray>
        )
      },
      {
        header: 'N°',
        editable: true,
        renderCell: (_, index) => <div className='w-10'>{index + 1}</div>
      },
      {
        field: 'product',
        type: ColumnType.Object,
        header: 'Produit',
        editable: true,
        renderCell: ({product}) => (
          <div className='!w-52 truncate'>
            {product?.['@subTitle'] || product?.['@title']}
          </div>
        ),
        slots: {
          control: ({setRowValue, changeFocus, rowIndex, value: product}) => (
            <RemoteAutocomplete<HydraCollection, HydraItem, false>
              className='w-10'
              endpoint='/products/base'
              getOptions={response => response['hydra:member']}
              getOptionLabel={option => option['@subTitle'] + ' - ' + option['@title']}
              autoFocus
              openOnFocus
              value={product}
              onChange={(_, newProduct) => {
                const initPurchaseOrderProduct: PurchaseOrderProductFormValue = getInitPurchaseOrderProduct({
                  buyer: auth?.user || null,
                  product: newProduct
                });
                setRowValue({rowIndex: rowIndex, value: initPurchaseOrderProduct});
                changeFocus();
              }}
              renderOption={(props, option) => (
                <AutocompleteOption {...props}>
                  <ModelCell item={option} slotProps={{title: {disabled: true, className: 'max-w-10'}}}/>
                </AutocompleteOption>
              )}
            />
          )
        }
      },
      {
        field: 'designation',
        className: '!w-72',
        format: StringColumnFormat.Text,
        header: 'Designation',
        editable: true,
        renderCell: ({designation}) => <div className='!w-72 truncate'>{designation}</div>
      },
      {
        field: 'quantity',
        type: ColumnType.Number,
        format: NumberFormat.Amount,
        currencyCode,
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
            measure={discount.discountType === DiscountType.Amount ? currencyCode : '%'}
          />
        ),
        slots: {
          control: ({rowIndex, setRowValue}) => {
            const {discount} = value[rowIndex];

            return (
              <InputGroup>
                <Input
                  className='w-20 rounded-none'
                  type='number'
                  autoFocus
                  placeholder='Valeur'
                  value={discount?.value}
                  onChange={e => {
                    const rowValue: Omit<DiscountModel, 'id'> = {
                      ...discount,
                      value: parseFloat(e.target.value),
                    };
                    setRowValue({rowIndex, value: rowValue});
                  }}
                />
                {[
                  {discountType: DiscountType.Amount, label: currencyCode},
                  {discountType: DiscountType.Percent, label: '%'},
                ].map(({discountType, label})=>(
                  <Button
                    key={discountType}
                    variant='light'
                    activeVariant='solid'
                    active={(discount?.discountType || DiscountType.Amount) === discountType}
                    className='rounded-none'
                    onClick={()=>{
                      const rowValue: Omit<DiscountModel, 'id'> = {
                        ...discount,
                        value: discount?.value || 0,
                        discountType,
                      };
                      setRowValue({rowIndex, value: rowValue});
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </InputGroup>
            );
          }
        }
      },
      {
        field: 'grossPrice',
        header: 'Prix brut',
        editable: true,
        type: ColumnType.Number,
        format: NumberFormat.Amount,
        currencyCode,
      },
      {
        field: 'netPrice',
        header: 'Prix net',
        editable: true,
        type: ColumnType.Number,
        format: NumberFormat.Amount,
        currencyCode,
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
        renderCell: ({grossPrice, quantity}) => <NumberUnit value={grossPrice * quantity} measure={currencyCode}/>,
      },
      {
        header: 'Mnt TTC',
        renderCell: ({grossPrice, quantity, vatRate}) => (
          <NumberUnit
            value={(grossPrice * quantity) * (1 + vatRate) / 100}
            measure={currencyCode}
          />
        ),
      },
      {field: 'note', header: 'Commentaire', editable: true, format: StringColumnFormat.Text},
    ];

    return columns;
  }, [value, currencyCode]);

  return (
    <>
      <DataGrid
        // stickyColumn
        hoverable
        size='sm'
        bordered
        columns={columns}
        data={value}
        onChange={setValue}
        // className='table-fixed'
      />
      {typeof activeIndex === 'number' && (
        <Modal
          size='lg'
          open
          onClose={() => setActiveIndex(undefined)}
          title='Détail réception'
        >
          <DesiredProductArrayField index={activeIndex}/>
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