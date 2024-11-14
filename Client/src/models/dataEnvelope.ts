export interface DataEnvelope<T> {
  data: T
  message?: String
  isSuccess: boolean
}

export interface DataListEnvelope<T> extends DataEnvelope<T[]> {
  data: T[]
  total: number
}
