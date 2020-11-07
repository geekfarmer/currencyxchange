import { currencies } from "./data/currencies";
import { symbols } from "./data/symbol";
import { CurrencySymbol } from "./types";

export function getCurrencySymbol(req: CurrencySymbol): string {
  let { country = "US", currency = "USD" } = req;
  country = country.toUpperCase()
  currency = currency.toUpperCase()
  if (country) currency = currencies[country];
  return symbols[currency];
}

export function getCurrencyCode(countryCode: string): string {
  countryCode = countryCode.toUpperCase()
  return currencies[countryCode]
}