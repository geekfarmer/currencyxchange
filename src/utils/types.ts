export interface RequestData {
  from: string
  to: string
}

export interface ResponseData {
  rates: object
  base: string
  date: string
}

export interface ConversionType {
  amount: number
  from: string
  to: string
  rates: any,
  minimumFractionDigits?: number
  maximumFractionDigits?: number
  minimumSignificantDigits?: number
  maximumSignificantDigits?: number
}