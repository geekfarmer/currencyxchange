import { Conversion } from "./utils/conversion";
import { ConversionType } from "./utils/types";
import { formattedPrice, supportedCurrencies } from "./data/data";
import { get, set } from "./utils/cache/cache";
import { AxiosError } from "axios";

const converion = new Conversion();

export async function formatCurrency(data: ConversionType) {
  const { amount, from = "USD", to = "USD", maximumFractionDigits = 0 } = data;
  if (
    !supportedCurrencies.includes(from) ||
    !supportedCurrencies.includes(to)
  ) {
    return;
  }
  const currencyConversion: any = await converion.getConversion(data);
  const rates = currencyConversion.rates;

  if (currencyConversion && rates[to]) {
    const convertedAmount = new Intl.NumberFormat("en-US", {
      style: "decimal",
      maximumFractionDigits,
    }).format(amount * rates[to]);
    const price = formattedPrice(to, convertedAmount);
    set("rates", currencyConversion);
    return price;
  }
  return;
}
