import {AbstractModel, HydraItem} from '../types.ts';



type Model = {
  code: string
} & AbstractModel

export type HydraModel = HydraItem<Model>

export default Model;