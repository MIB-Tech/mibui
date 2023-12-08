import {Button, ButtonGroup, Card} from '../../../../Components';
import {FormGroup, Input, InputNumber, Label} from '../../../../Forms';
import {DatePickerExample} from '../../../../pages/Forms/DatePicker/DatePage.tsx';
import {
  PurchaseOrderProductDataGridExample
} from '../../../../pages/ApplicationUI/FormLayout/Examples/PurchaseOrderProductDataGridExample.tsx';
import {useMutation} from '@tanstack/react-query';
import axios, {AxiosResponse} from 'axios';
import {useNavigate} from 'react-router-dom';
import {HydraCollection, HydraItem} from '../../../types.ts';
import {Formik} from 'formik';
import {initialValues, validationSchema} from './Page.utils.ts';
import {FormValue} from './Page.types.ts';
import {InputFieldGroup, RemoteAutocompleteFieldGroup} from '../../../../Formik';
import {Trans} from 'react-i18next';


const Page = () => {
  const navigate = useNavigate();

  const {mutate, isPending} = useMutation<AxiosResponse<HydraItem>, any, FormValue>({
    mutationFn: credentials => axios.post('/custom/auth/login', credentials),
    onSuccess: ({data}) => {
      navigate(data['@id']);
    }
  });


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={mutate}
    >
      {({handleSubmit}) => (
        <div className='flex flex-col space-y-10'>
          <Card
            footer={(
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
            )}
          >
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
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
              <FormGroup>
                <Label>Date de pièce</Label>
                <DatePickerExample/>
              </FormGroup>
              <FormGroup>
                <Label>Acronyme</Label>
                <ButtonGroup variant='light' activeVariant='solid'>
                  <Button active>HT</Button>
                  <Button>TTC</Button>
                </ButtonGroup>
              </FormGroup>
              <InputFieldGroup name='ref'/>
              <InputFieldGroup name='externalRef'/>
              <FormGroup>
                <Label>Réception prévue</Label>
                <DatePickerExample/>
              </FormGroup>
              <RemoteAutocompleteFieldGroup<HydraCollection, HydraItem>
                name='currency'
                endpoint='/base/currencies'
                getOptions={response => response['hydra:member']}
                getOptionLabel={option => option['@title']}
              />
              <FormGroup>
                <Label>Budget</Label>
                <InputNumber/>
              </FormGroup>
            </div>
          </Card>
          <div className='flex flex-col space-y-4'>
            <div className='font-semibold text-2xl'>
              Produits
            </div>
            <PurchaseOrderProductDataGridExample/>
            <div>
              <Button>
                Ajouter
              </Button>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Page;