import {AbstractModel, HydraItem} from '../types.ts';

type Model = {
  name: string
} & AbstractModel

export type HydraModel = HydraItem<Model>

export default Model;