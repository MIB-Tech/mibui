import {Button} from '../../../../Components';
import {ErrorFeedback} from '../../../../Forms';
import {useMutation, useQuery} from '@tanstack/react-query';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import {HydraCollection, HydraItem} from '../../../types.ts';
import {ErrorMessage, FieldArray, Formik, FormikProps} from 'formik';
import {getInitReceiptProduct, initialValues, validationSchema} from './Page.utils.ts';
import {PurchaseOrderFormValue, ReceiptProductFormValue} from './Page.types.ts';
import {InputFieldGroup, RemoteAutocompleteFieldGroup} from '../../../../Formik';
import {Trans} from 'react-i18next';
import {DatePickerFieldGroup} from '../../../../Components/DatePickerField';
import {ReceiptProductArrayField} from './Fields/ReceiptProductArrayField.tsx';
import {IconButton} from '../../../../Components/IconButton/IconButton.tsx';
import {PlusIcon} from '@heroicons/react/20/solid';
import {notify} from '../../../../Components/Toast/Toast.utils.tsx';


const Page = () => {
  // const [printModelOpen, setModalOpen] = useBooleanState();
  const {id} = useParams<'id'>();
  const navigate = useNavigate();
  const {mutate, isPending} = useMutation<AxiosResponse<HydraItem>, any, PurchaseOrderFormValue>({
    // mutationFn: credentials => axios.post('/custom/auth/login', credentials),
    mutationFn: data => {
      let requestConfig: AxiosRequestConfig = {
        data,
        method: 'POST',
        url: '/receipts'
      };
      if (id) {
        requestConfig.url = `${requestConfig.url}/${id}`;
        requestConfig.method = 'PUT';
      }

      return axios(requestConfig);
    },
    onSuccess: ({data}) => {
      navigate(data['@id']);
      notify({
        title: 'Enregistré',
        color: 'success'
      });
    },
    onError: () => {
      notify({
        title: 'Une erreur est survenue',
        variant: 'solid',
        color: 'error'
      });
    }
  });
  const isUpdate = !!id;
  const {data, isPending: fetching} = useQuery({
    queryKey: [],
    queryFn: () => axios.get<PurchaseOrderFormValue>(`/receipts/${id}`),
    enabled: isUpdate
  });


  if (isUpdate && fetching) {
    return <>Chargement...</>;
  }

  return (
    <Formik
      initialValues={isUpdate && data ? data.data : initialValues}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={mutate}
    >
      {({handleSubmit, isValid}: FormikProps<PurchaseOrderFormValue>) => {

        return (
          <>
            <div className='flex flex-col space-y-5'>
              <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-2'>
                <InputFieldGroup name='receiptNumber' slotProps={{input: {disabled: true}}}/>
                <RemoteAutocompleteFieldGroup<HydraCollection, HydraItem>
                  name='purchaseOrder'
                  endpoint='/base/purchase-orders'
                  getOptions={response => response['hydra:member']}
                  getOptionLabel={option => option['@title']}
                  disabled={isUpdate}
                />
                <InputFieldGroup name='externalRef'/>
                <DatePickerFieldGroup name='receivedAt'/>
              </div>
              <div className='flex flex-col space-y-4'>
                <div className='flex justify-between'>
                  <div className='flex items-center space-x-2'>
                    <div className='font-semibold text-2xl'>
                      Produits
                    </div>
                    <FieldArray name='receiptProducts'>
                      {({insert}) => (
                        <IconButton
                          iconElement={PlusIcon}
                          variant='clean'
                          onClick={() => {
                            const initReceiptProduct: ReceiptProductFormValue = getInitReceiptProduct();

                            insert(0, initReceiptProduct);
                          }}
                        />
                      )}
                    </FieldArray>
                    {/*<IconButton*/}
                    {/*  iconElement={BarsArrowUpIcon}*/}
                    {/*  variant='clean'*/}
                    {/*  onClick={() => {*/}
                    {/*  }}*/}
                    {/*/>*/}
                    <ErrorFeedback>
                      <ErrorMessage name='receiptProducts'/>
                    </ErrorFeedback>
                  </div>
                  <div className='flex space-x-3 justify-end'>
                    <Button
                      onClick={() => handleSubmit()}
                      loading={isPending}
                      disabled={!isValid}
                    >
                      <Trans i18nKey='SAVE'/>
                    </Button>
                  </div>
                </div>
                <ReceiptProductArrayField/>
              </div>
            </div>
            {/*{values.id && (*/}
            {/*  <PrintView*/}
            {/*    open={printModelOpen}*/}
            {/*    ids={[values.id]}*/}
            {/*    endpoint='/print/receipts'*/}
            {/*    onClose={() => setModalOpen(false)}*/}
            {/*    getItemParams={(item: HydraReceiptModel) => {*/}
            {/*      const objectToPrint: PurchaseOrderPrint = {*/}
            {/*        ...item,*/}
            {/*        //*/}
            {/*        createdAt: moment(item.createdAt).format(),*/}
            {/*        receivedAt: moment(item.createdAt).format('L'),*/}
            {/*        taxType: item.isTaxIncluded ? 'TTC' : 'HT',*/}
            {/*        //*/}
            {/*        grossTotalExclTax: 0, //TODO*/}
            {/*        totalInclTax: 0, //TODO*/}
            {/*        totalVatTax: 0, //TODO*/}
            {/*        receiptProducts: item.receiptProducts.map(receiptProduct => ({*/}
            {/*          ...receiptProduct,*/}
            {/*          product: {*/}
            {/*            code: 'P01',*/}
            {/*          },*/}
            {/*          grossTotalExclTax: 0, // todo*/}
            {/*          grossPrice: 0, // todo*/}
            {/*          netPrice: 0, // todo*/}
            {/*          discount: {*/}
            {/*            discountType: DiscountType.Amount,*/}
            {/*            value: 0*/}
            {/*          }*/}
            {/*        }))*/}
            {/*      };*/}

            {/*      return objectToPrint;*/}
            {/*    }}*/}
            {/*  />*/}
            {/*)}*/}

          </>
        );
      }}
    </Formik>
  );
};

export default Page;
