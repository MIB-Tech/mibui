export type AbstractModel = {
  id: number
}
export type CreateTimestampModel = {
  createdAt?: string
}
export type TimestampModel = {
  updatedAt?: string
} & CreateTimestampModel

export type HydraItem<T extends object = {}> = {
  '@id': string
  '@title': string
  '@subTitle': string
} & AbstractModel & T

export type HydraCollection<T extends object = {}> = {
  'hydra:member': Array<HydraItem<T>>
  'hydra:totalItems': number
}