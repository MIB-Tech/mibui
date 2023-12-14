import {FieldArray, useFormikContext} from 'formik';
import DataGrid from '../../../../../Components/DataGrid/DataGrid.tsx';
import Modal from '../../../../../Components/Modal/Modal.tsx';
import {Button} from '../../../../../Components';
import {useMemo, useState} from 'react';
import {Column, ColumnType} from '../../../../../Components/DataGrid/Column/Column.types.ts';
import {IconButton} from '../../../../../Components/IconButton/IconButton.tsx';
import {ListBulletIcon, XMarkIcon} from '@heroicons/react/20/solid';
import {Input, InputGroup, InputGroupAddon, RemoteAutocomplete, Select} from '../../../../../Forms';
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
import {Switch} from '../../../../../Components/Switch';
import {ModelCell} from '../../../components/ModelCell.tsx';

const getUnitNetAmount = ({isTaxIncluded = false, vatRate = 0, grossPrice = 0}: Pick<PurchaseOrderProductFormValue, 'vatRate' | 'grossPrice'> & Pick<FormValue, 'isTaxIncluded'>) => {
  return isTaxIncluded ?
    grossPrice / (1 + vatRate) :
    grossPrice
}

export const PurchaseOrderProductArrayField = () => {
  const {auth} = useAuth();
  const [activeIndex, setActiveIndex] = useState<number>();
  const {values, setFieldValue} = useFormikContext<FormValue>();
  const {currency, isTaxIncluded, purchaseOrderProducts} = values;
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
        currencyCode,
        header: 'Quantité',
        editable: true,
        renderFooterCell: () => (
          <NumberUnit
            measure=''
            value={purchaseOrderProducts.reduce((count, purchaseOrderProduct) => {

              return count + purchaseOrderProduct.quantity;
            }, 0)}
          />
        )
      },
      {
        field: 'discount',
        header: 'Remise',
        type: ColumnType.Object,
        editable: true,
        renderCell: ({discount}) => {
          const {value = 0, discountType = DiscountType.Percent} = {...discount};

          return (
            <NumberUnit
              value={discountType === DiscountType.Amount ? value : value * 100}
              measure={discountType === DiscountType.Amount ? currencyCode : '%'}
            />
          );
        },
        slots: {
          control: ({rowIndex, setRowValue}) => {
            const row = purchaseOrderProducts[rowIndex];
            const {value = 0, discountType = DiscountType.Percent} = {...row.discount};

            return (
              <InputGroup>
                <InputGroupAddon className='rounded-none space-x-2 text-sm'>
                  <div>{currencyCode}</div>
                  <Switch
                    checked={discountType === DiscountType.Percent}
                    onChange={e => {
                      const rowValue: PurchaseOrderProductFormValue = {
                        ...row,
                        discount: {
                          value: 0,
                          discountType: e.target.checked ? DiscountType.Percent : DiscountType.Amount
                        }
                      };
                      setRowValue({rowIndex, value: rowValue});
                    }}
                  />
                  <div>%</div>
                </InputGroupAddon>
                <Input
                  className='w-20 rounded-none'
                  type='number'
                  autoFocus
                  value={discountType === DiscountType.Amount ? value : value * 100}
                  onChange={e => {
                    const value = parseFloat(e.target.value);
                    const rowValue: PurchaseOrderProductFormValue = {
                      ...row,
                      discount: {
                        discountType,
                        value: discountType === DiscountType.Amount ? value : value / 100
                      }
                    };
                    setRowValue({rowIndex, value: rowValue});
                  }}
                />
              </InputGroup>
            );
          }
        }
      },
      {
        field: 'grossPrice',
        header: 'P.U. Brut',
        editable: true,
        type: ColumnType.Number,
        format: NumberFormat.Amount,
        currencyCode,
      },
      {
        header: 'P.U. Net',
        type: ColumnType.Number,
        format: NumberFormat.Amount,
        currencyCode,
        renderCell: item => {
          const {discount} = item
          const amount = getUnitNetAmount({...item, isTaxIncluded})
          let discountAmount = discount?.value || 0;
          if (discount?.discountType === DiscountType.Percent) {
            discountAmount = amount * discount.value;
          }
          return (
            <NumberUnit
              value={amount - discountAmount}
            />
          );
        },
      },
      {
        field: 'vatRate',
        header: 'Taux TVA',
        editable: true,
        type: ColumnType.Number,
        format: NumberFormat.Percent,
        precision: 0,
        slots: {
          control: ({rowIndex, setFieldValue, changeFocus, value}) => (
            <Select
              autoFocus
              openOnFocus
              options={[0, .07, .1, .14, .2]}
              getOptionLabel={option => `${(option * 100).toFixed(0)} %`}
              value={value}
              onChange={(_, discountValue) => {
                setFieldValue({rowIndex, field: 'vatRate', value: discountValue});
                changeFocus();
              }}
            />
          )
        }
      },
      // {
      //   header: 'Acheteur',
      //   renderCell: ({buyer}) => buyer?.['@title']
      // },
      {
        header: 'Mnt Net HT',
        renderCell: item => {
          const {discount, quantity = 0,} = item
          const amount = getUnitNetAmount({...item, isTaxIncluded})
          let discountAmount = discount?.value || 0;
          if (discount?.discountType === DiscountType.Percent) {
            discountAmount = amount * discount.value;
          }
          return (
            <NumberUnit
              value={isTaxIncluded ?
                //(grossPrice * quantity / (1 + vatRate)) / (1 + vatRate)
                (amount - discountAmount) * quantity :
                //  grossPrice / (1 + vatRate)*quantity : //add
                (amount - discountAmount) * quantity
              }
              measure={currencyCode}
            />
          )
        },
        renderFooterCell: () => (

          <NumberUnit
            measure=''
            value={purchaseOrderProducts.reduce((count, purchaseOrderProduct) => {

              return count + purchaseOrderProduct.grossPrice;
            }, 0)}
          />
        )
      },
      {
        header: 'Montant TTC',
        renderCell: item => {
          const {discount, quantity = 0, grossPrice, vatRate} = item
          const amount = getUnitNetAmount({...item, isTaxIncluded})
          let discountAmount = discount?.value || 0;
          if (discount?.discountType === DiscountType.Percent) {
            discountAmount = amount * discount.value;
          }
          let totalInclTax = isTaxIncluded ?
            grossPrice * quantity : /// (1 + vatRate)
            (amount - discountAmount) * quantity + ((amount - discountAmount) * (quantity * vatRate))

          //grossPrice * quantity * (1 + vatRate)
          //  (amount - discountAmount) * quantity+((amount - discountAmount) * (quantity*vatRate))

          return (
            <NumberUnit
              value={vatRate ? totalInclTax : 0}
              measure={currencyCode}
            />
          )
        },
      },
      {field: 'note', header: 'Commentaire', editable: true, format: StringColumnFormat.Text},
    ];

    return columns;
  }, [purchaseOrderProducts, currencyCode, isTaxIncluded]);

  return (
    <>
      <DataGrid
        // stickyColumn
        hoverable
        size='sm'
        bordered
        columns={columns}
        data={purchaseOrderProducts}
        onChange={value => setFieldValue('purchaseOrderProducts', value)}
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