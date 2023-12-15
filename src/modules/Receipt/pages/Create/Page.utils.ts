import {PurchaseOrderFormValue, ReceiptProductFormValue} from './Page.types.ts';
import {array, number, object, string} from 'yup';
import {useMutation} from '@tanstack/react-query';
import axios, {AxiosResponse} from 'axios';
import {AbstractModel, HydraItem} from '../../../types.ts';
import {PurchaseOrderModel} from '../../../PurchaseOrder';
import {notify} from '../../../../Components/Toast/Toast.utils.tsx';
import {useNavigate} from 'react-router-dom';

export const initialValues: PurchaseOrderFormValue = {
  receiptNumber: '',
  receivedAt: null,
  purchaseOrder: null,
  externalRef: '',
  receiptProducts: [],
};

const relation = () => object().shape({
  id: number().required()
});

export const validationSchema/*: ObjectSchema<FormValue>*/ = object().shape({
  receivedAt: string().required(),
  purchaseOrder: relation(),
  ref: string().nullable(),
  externalRef: string().nullable(),
  receiptProducts: array().min(1).required(),
});
export const getInitReceiptProduct: (init?: Partial<ReceiptProductFormValue>) => ReceiptProductFormValue = (initialState) => {

  return {
    designation: '',
    quantity: 0,
    address: '',
    desiredProduct: null,
    receipt: null,
    ...initialState
  };
};

export const useGenerateReceipt = () => {
  const navigate = useNavigate();

  return useMutation<AxiosResponse<HydraItem>, any, AbstractModel>({
    mutationFn: async ({id}) => {
      const response = await axios.get<PurchaseOrderModel>(`/purchase-orders/${id}`);
      const {orderNumber, purchaseOrderProducts} = response.data;
      let receiptProducts: ReceiptProductFormValue[] = [];
      purchaseOrderProducts.forEach(({desiredProducts, designation}) => {
        if (desiredProducts.length > 0) {
          desiredProducts.forEach(({designation, address}) => {
            receiptProducts.push({designation, quantity: 0, address});
          });
        } else {
          receiptProducts.push({designation, quantity: 0, address: ''});
        }
      });

      return axios.post('/receipts', {
        externalRef: orderNumber,
        purchaseOrder: {id},
        receiptProducts
      });
    },
    onSuccess: ({data}) => {
      navigate(data['@id']);
      notify({title: 'Généré', color: 'success'});
    },
    onError: () => notify({title: 'Une erreur est survenue', variant: 'solid', color: 'error'})
  });
};