import {Button, Tooltip} from '../../../../Components';
import {ErrorFeedback, Option} from '../../../../Forms';
import {useMutation, useQuery} from '@tanstack/react-query';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import {HydraCollection, HydraItem} from '../../../types.ts';
import {ErrorMessage, FieldArray, Formik, FormikProps} from 'formik';
import {getInitPurchaseOrderProduct, initialValues, validationSchema} from './Page.utils.ts';
import {FormValue, PurchaseOrderProductFormValue} from './Page.types.ts';
import {InputFieldGroup, RemoteAutocompleteFieldGroup, SelectFieldGroup} from '../../../../Formik';
import {Trans} from 'react-i18next';
import {DatePickerFieldGroup} from '../../../../Components/DatePickerField';
import {PurchaseOrderProductArrayField} from './Fields/PurchaseOrderProductArrayField.tsx';
import {useAuth} from '../../../../pages/Auth/Login/Login.tsx';
import {IconButton} from '../../../../Components/IconButton/IconButton.tsx';
import {PlusIcon, PrinterIcon} from '@heroicons/react/20/solid';
import {notify} from '../../../../Components/Toast/Toast.utils.tsx';
import PrintView from '../../components/PrintView/PrintView.tsx';
import {useBooleanState} from '../../../../hooks/UseBooleanState.tsx';
import {PurchaseOrderPrint} from '../../../../Components/Reporting/ReportViewer.types.ts';
import {DiscountType} from '../../../../pages/ApplicationUI/FormLayout/Examples/types.ts';
import {HydraPurchaseOrderModel} from '../../index.ts';
import moment from 'moment/moment';
import {RouteEnum} from '../../../../@types/Route.ts';
import {useGenerateReceipt} from '../../../Receipt/pages/Create/Page.utils.ts';

const Page = () => {
  const [printModelOpen, setModalOpen] = useBooleanState();
  const {id} = useParams<'id'>();
  const navigate = useNavigate();
  const {auth} = useAuth();
  const {mutate, isPending} = useMutation<AxiosResponse<HydraItem>, any, FormValue>({
    // mutationFn: credentials => axios.post('/custom/auth/login', credentials),
    mutationFn: data => {
      let requestConfig: AxiosRequestConfig = {
        data,
        method: 'POST',
        url: '/purchase-orders'
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
    queryKey: [RouteEnum.PurchaseOrderUpdate],
    queryFn: () => axios.get<FormValue>(`/purchase-orders/${id}`),
    enabled: isUpdate
  });

  const generateReceipt = useGenerateReceipt();


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
      {({handleSubmit, values, isValid}: FormikProps<FormValue>) => {
        const {id, purchaseOrderProducts} = values;

        return (
          <>
            <div className='flex flex-col space-y-5'>
              <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-2'>
                <InputFieldGroup name='orderNumber' slotProps={{input: {disabled: true}}}/>
                <RemoteAutocompleteFieldGroup<HydraCollection, HydraItem>
                  name='vendor'
                  endpoint='/base/vendors'
                  getOptions={response => response['hydra:member']}
                  getOptionLabel={option => option['@title']}
                  disabled={isUpdate}
                />
                <DatePickerFieldGroup name='createdAt' includeTime disabled={isUpdate}/>
                <SelectFieldGroup name='isTaxIncluded' disabled={purchaseOrderProducts.length > 0}>
                  <Option value={true}>TTC</Option>
                  <Option value={false}>HT</Option>
                </SelectFieldGroup>
                <InputFieldGroup name='ref'/>
                <InputFieldGroup name='externalRef'/>
                <DatePickerFieldGroup name='desiredDeliveryDate'/>
                <RemoteAutocompleteFieldGroup<HydraCollection, HydraItem>
                  disabled={isUpdate}
                  name='currency'
                  endpoint='/base/currencies'
                  getOptions={response => response['hydra:member']}
                  getOptionLabel={option => option['@title']}
                />
              </div>
              <div className='flex flex-col space-y-4'>
                <div className='flex justify-between'>
                  <div className='flex items-center space-x-2'>
                    <div className='font-semibold text-2xl'>
                      Produits
                    </div>
                    <FieldArray name='purchaseOrderProducts'>
                      {({insert}) => (
                        <IconButton
                          iconElement={PlusIcon}
                          variant='clean'
                          onClick={() => {
                            const initPurchaseOrderProduct: PurchaseOrderProductFormValue = getInitPurchaseOrderProduct({
                              buyer: auth?.user || null
                            });

                            insert(0, initPurchaseOrderProduct);
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
                      <ErrorMessage name='purchaseOrderProducts'/>
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
                    {id && isUpdate && (
                      <>
                        <Button
                          loading={generateReceipt.isPending}
                          onClick={() => generateReceipt.mutate({id})}
                        >
                          Génerer bon de réception
                        </Button>
                        {values.id && (
                          <Tooltip content='Imprimer' placement='left'>
                            <div>
                              <IconButton
                                iconElement={PrinterIcon}
                                variant='clean'
                                color='primary'
                                onClick={() => {
                                  setModalOpen(true);
                                }}
                              />
                            </div>
                          </Tooltip>
                        )}
                      </>
                    )}


                  </div>
                </div>
                <PurchaseOrderProductArrayField/>
              </div>
            </div>
            {values.id && (
              <PrintView
                open={printModelOpen}
                ids={[values.id]}
                endpoint='/print/purchase-orders'
                onClose={() => setModalOpen(false)}
                getItemParams={(item: HydraPurchaseOrderModel) => {
                  const objectToPrint: PurchaseOrderPrint = {
                    ...item,
                    //
                    createdAt: moment(item.createdAt).format(),
                    desiredDeliveryDate: moment(item.createdAt).format('L'),
                    taxType: item.isTaxIncluded ? 'TTC' : 'HT',
                    //
                    grossTotalExclTax: 0, //TODO
                    totalInclTax: 0, //TODO
                    totalVatTax: 0, //TODO
                    purchaseOrderProducts: item.purchaseOrderProducts.map(purchaseOrderProduct => ({
                      ...purchaseOrderProduct,
                      product: {
                        code: 'P01',
                      },
                      grossTotalExclTax: 0, // todo
                      grossPrice: 0, // todo
                      netPrice: 0, // todo
                      discount: {
                        discountType: DiscountType.Amount,
                        value: 0
                      }
                    }))
                  };

                  return objectToPrint;
                }}
              />
            )}

          </>
        );
      }}
    </Formik>
  );
};

export default Page;
