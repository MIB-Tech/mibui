import {Button} from '../../../../Components';
import {FormGroup, Input, Label} from '../../../../Forms';
import {useMutation, useQuery} from '@tanstack/react-query';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import {HydraCollection, HydraItem} from '../../../types.ts';
import {FieldArray, Formik, FormikProps} from 'formik';
import {getInitPurchaseOrderProduct, initialValues, validationSchema} from './Page.utils.ts';
import {FormValue, PurchaseOrderProductFormValue} from './Page.types.ts';
import {InputFieldGroup, RemoteAutocompleteFieldGroup, SelectFieldGroup} from '../../../../Formik';
import {Trans} from 'react-i18next';
import {DatePickerFieldGroup} from '../../../../Components/DatePickerField';
import {PurchaseOrderProductArrayField} from './Fields/PurchaseOrderProductArrayField.tsx';
import {useAuth} from '../../../../pages/Auth/Login/Login.tsx';
import {IconButton} from '../../../../Components/IconButton/IconButton.tsx';
import {BarsArrowUpIcon, PlusIcon} from '@heroicons/react/20/solid';
import {notify} from '../../../../Components/Toast/Toast.utils.tsx';

const Page = () => {
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
        title: 'Une erreur est survenue'
      });
    }
  });

  const isUpdate = !!id;
  const {data, isPending: fetching} = useQuery({
    queryKey: ['GET_PURCHASE_ORDER'],
    queryFn: () => axios.get<FormValue>(`/purchase-orders/${id}`),
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
      {({handleSubmit}: FormikProps<FormValue>) => {

        return (
          <div className='flex flex-col space-y-5'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-3 gap-y-2'>
              <FormGroup>
                <Label>N° piéce</Label>
                <Input disabled/>
              </FormGroup>
              <RemoteAutocompleteFieldGroup<HydraCollection, HydraItem>
                name='vendor'
                endpoint='/base/vendors'
                getOptions={response => response['hydra:member']}
                getOptionLabel={option => option['@title']}
              />
              <DatePickerFieldGroup name='createdAt' includeTime/>
              <SelectFieldGroup
                name='isTaxIncluded'
                options={[true, false]}
                getOptionLabel={option => option ? 'TTC' : 'HT'}
              />
              <InputFieldGroup name='ref'/>
              <InputFieldGroup name='externalRef'/>
              <DatePickerFieldGroup name='desiredDeliveryDate'/>
              <RemoteAutocompleteFieldGroup<HydraCollection, HydraItem>
                name='currency'
                endpoint='/base/currencies'
                getOptions={response => response['hydra:member']}
                getOptionLabel={option => option['@title']}
              />
            </div>
            <div className='flex flex-col space-y-4'>
              <div className='flex justify-between'>
                <div className='flex space-x-2'>
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

                  <IconButton
                    iconElement={BarsArrowUpIcon}
                    variant='clean'
                    onClick={() => {
                    }}
                  />
                </div>
                <div className='flex space-x-3 justify-end'>
                  <Button
                    onClick={() => handleSubmit()}
                    loading={isPending}
                  >
                    <Trans i18nKey='SAVE'/>
                  </Button>
                  <Button disabled>
                    Génerer bon de réception
                  </Button>
                </div>
              </div>
              <PurchaseOrderProductArrayField/>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Page;