import { AxiosError } from "axios";
import { supportedCurrencies } from "../data/data";
import { ApiClient } from "./api-client";
import { RequestData, ResponseData } from "./types";
import { get, set } from "./cache/cache";

export class Conversion extends ApiClient {
  public constructor() {
    super("https://api.exchangeratesapi.io");
  }

  public getConversion = (data: RequestData) => {
    const rates = get("rates");
    if (rates) return rates;
    return this.instance
      .get<ResponseData>(`/latest?base=${data.from}`)
      .then((res) => res)
      .catch((error: AxiosError) => {
        console.log(error.message);
        return undefined;
      });
  };
}
