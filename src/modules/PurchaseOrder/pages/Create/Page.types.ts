import Model from '../../Model.ts';
import {HydraItem} from '../../../types.ts';

export type FormValue = {
  vendor: Pick<HydraItem, 'id' | '@title'> | null
  currency: Pick<HydraItem, 'id' | '@title'> | null
} & Pick<Model, 'createdAt' | 'isTaxIncluded' | 'ref' | 'externalRef' | 'desiredDeliveryDate' | 'budget'>