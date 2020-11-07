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
  to?: string
  rates: any,
  country?: string,
  minimumFractionDigits?: number
  maximumFractionDigits?: number
  minimumSignificantDigits?: number
  maximumSignificantDigits?: number
}

export interface CurrencySymbol {
  country: string
  currency: string
}