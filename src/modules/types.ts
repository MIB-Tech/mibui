export type AbstractModel = {
  id: number
}

export type TimestampModel = {
  createdAt?: string
  updatedAt?: string
}

export type HydraItem<T extends object> = {
  '@title': string
  '@subTitle': string
} & T