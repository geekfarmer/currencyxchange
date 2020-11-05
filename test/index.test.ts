import { formatCurrency } from '../src/index';

test('#on succesful conversion', async () => {
  const formattedPrice: string = await formatCurrency({ amount: 0.99, from: 'USD', to: 'INR'})
  expect(formattedPrice).toEqual('₹74');
});

test('#on no conversion conversion', async () => {
  const formattedPrice: string = await formatCurrency({ amount: 0.99, from: 'USD', to: 'COP'})
  expect(formattedPrice).toEqual(undefined);
});

test('#on invalid currency conversion', async () => {
  const formattedPrice: string = await formatCurrency({ amount: 0.99, from: 'USD', to: 'ZZZ'})
  expect(formattedPrice).toEqual(undefined);
});