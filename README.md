# Currency X-change

A light weight library for currency locale and exchange rates. Currency x-change module use auto caching of exchange rates.

It is based on [exchangeratesapi.io](https://exchangeratesapi.io/) API.

## "Light-Weight, Easy to use"

# Getting started

## Installation
Use the package manager [npm](https://www.npmjs.com/package/npm) or [yarn](https://yarnpkg.com/) to install foobar.

```bash
npm i currencyxchange
```
or 
```bash
 yarn add currencyxchange
```

## Import
```js
import { formatCurrency, getCurrencyRate, getCurrencyRateList, getCurrencyCode, getCurrencySymbol } from 'currencyxchange';
```
or
```js
import currencyxchange from 'currencyxchange';
```

# Functions
This package exports following functions to use

- getCurrencyRate(): Takes base currency as parameter and return exchange rates to all supported currencies, Returns a promise.

- getCurrencyRateList(): Fetch latest exchange rates for all supported currencies, Returns a promise.

- formatCurrency(): convert price to reuested currency based on latest exchange rates, Returns a formatted price in string format.

- getCurrencyCode(): Fetch currency code by country code, Returns a string.

- getCurrencySymbol(): Fetch currency symbol by currency code, Returns a string.

# Usage

## 1. getCurrencyRate(base: string)
By default it will return exchange rates with base currency 'USD'.
It will return cached exchange rates. If no cache found it will fetch exchange rates, cache it and return.

Example
```js
await getCurrencyRate('USD')
```
output:
```json
{
  "rates": {
    "CAD": 1.3079191238,
    "HKD": 7.7531592249,
    "ISK": 137.7422072452,
    "PHP": 48.1819713564,
    "DKK": 6.2757371525,
    "HUF": 302.4599831508,
    "CZK": 22.4658803707,
    "GBP": 0.7618365628,
    .
    .
    .
    .
  },
  "base": "USD",
  "date": "2020-11-06"
}
```
## 2. getCurrencyRateList()

It will return an array of cached exchange rates for all supported currencies. If no cache found it will fetch exchange rates, cache it and return.

Example
```js
await getCurrencyRateList()
```
output:
```json
[
  {
    "rates": {
      "CAD": 0.0043242716,
      "HKD": 0.0256336694,
      "ISK": 0.455406384,
      "PHP": 0.1593003175,
      "DKK": 0.0207489833,
      "HUF": 1,
      "CZK": 0.074277199,
      "GBP": 0.0025188012,
      "RON": 0.0135563478,
      .
      .
      .
      .
    },
    "base": "HUF",
    "date": "2020-11-06"
  },
  {
    "rates": {
      "CAD": 0.2084088438,
      "HKD": 1.235418093,
      "ISK": 21.9483709879,
      "PHP": 7.6774998993,
      "DKK": 1,
      "HUF": 48.1951324286,
      .
      .
      .
      .
    },
    "base": "DKK",
    "date": "2020-11-06"
  },
  {
    "rates": {
      "CAD": 0.2053843101,
      "HKD": 1.2174890859,
      "ISK": 21.6298452176,
      "PHP": 7.5660801693,
      "DKK": 0.9854874983,
      "HUF": 47.4957004895,
      .
      .
      .
      .
    },
    "base": "HRK",
    "date": "2020-11-06"
  }
  .
  .
  .
  .
  .
]
```

## 3. formatCurrency(countryCode: string)
Developer can use their own conversion rates, or use above two methods. In the example I am using my own.
Example
```js
const conversionRates = {
  "rates": {
    "CAD": 1.3079191238,
    "INR": 74.25262772,
    "HKD": 7.7531592249,
    "ISK": 137.7422072452,
    "PHP": 48.1819713564,
    "DKK": 6.2757371525,
    "HUF": 302.4599831508,
    "CZK": 22.4658803707,
    "GBP": 0.7618365628,
    .
    .
    .
    .
  },
  "base": "USD",
  "date": "2020-11-06"
}
```
```js
formatCurrency({
  rates: conversionRates.rates,
  amount: 100,
  from: 'USD',
  to: 'INR'
})
// output: '₹74'
```
or 

```js
formatCurrency({
  rates: conversionRates.rates,
  amount: 100,
  from: 'USD',
  country: 'IN'
})
// output: '₹74'
```

## 4. getCurrencyCode(countryCode: string)

Example
```js
getCurrencyCode('US')

// output: 'USD'
```

## 5. getCurrencySymbol({ country?: string, currency?: string})

Example
```js
getCurrencySymbol({ country: 'US' })
// output: '$'
```
or
```js
getCurrencySymbol({ currency: 'USD' })
// output: '$'
```

# Supported Currencies
- Australian Dollar (AUD)
- Bulgarian Lev (BGN)
- Brazilian Real (BRL)
- Canadian Dollar (CAD)
- Swiss Franc (CHF)
- Chinese Yuan Renminbi (CNY)
- Czech Koruna (CZK)
- Danish Krone (DKK)
- European Union Euro (EUR)
- Great Britain Pound (GBP)
- Hong Kong Dollar (HKD)
- Croatian Kuna (HRK)
- Hungarian Forint (HUF)
- Indonesian Rupiah (IDR)
- New Israeli Sheqel (ILS)
- Indian Rupee (INR)
- Iceland Krona (ISK)
- Japanese Yen (JPY)
- Korean Won (KRW)
- Mexican Peso (MXN)
- Malaysian Ringgit (MYR)
- Norwegian Krone (NOK)
- New Zealand Dollar (NZD)
- Philippine Peso (PHP)
- Polis Zloty (PLN)
- Romanian Leu (RON)
- Russian Ruble (RUB)
- Swedish Krona (SEK)
- Singapore Dollar (SGD)
- Thailand Baht (THB)
- Turkish Lira (TRY)
- United States Dollar (USD)
- Rand (ZAR)

For now thats it!.

Working on to support more currencies...

# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

# License
[MIT](https://choosealicense.com/licenses/mit/)



