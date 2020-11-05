import { Conversion } from "./utils/conversion";
import { ConversionType } from "./utils/types";
import { formattedPrice, supportedCurrencies } from "./data/data";
import { get, set } from "./utils/cache/cache";

const converion = new Conversion();

export function formatCurrency(data: ConversionType) {
  const {
    amount,
    from = "USD",
    to = "USD",
    maximumFractionDigits = 0,
    rates = {},
  } = data;
  if (
    !supportedCurrencies.includes(from) ||
    !supportedCurrencies.includes(to)
  ) {
    return;
  }
  if (rates && rates[to]) {
    const convertedAmount = new Intl.NumberFormat("en-US", {
      style: "decimal",
      maximumFractionDigits,
    }).format(amount * rates[to]);
    const price = formattedPrice(to, convertedAmount);
    return price;
  }
  return formattedPrice(from, amount.toString());
}

export async function getConversions(base: string) {
  const currencyConversion: any = await converion.getConversion(base);
  if (!get("rates")) set("rates", currencyConversion);
  const rates = currencyConversion.rates;
  return rates;
}
