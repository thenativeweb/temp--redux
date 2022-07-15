import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchCurrency = createAsyncThunk(
  'currencies/fetchCurrency',
  async (currency: string) => {
    const response = await fetch(`https://api.frankfurter.app/latest?from=EUR&to=${currency}`);
    const body = await response.json();

    return {
      currency,
      rate: body.rates[currency]
    };
  }
)

// The CurrenciesState is a map whose keys are the names of currencies and the
// values are the conversion rates from EUR to the currency.
type CurrenciesState = Record<string, number>;

const initialState: CurrenciesState = {};

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCurrency.fulfilled, (state, action) => {
      state[action.payload.currency] = action.payload.rate;
    });
  }
});

export type {
  CurrenciesState
};
export {
  fetchCurrency
};
export default currenciesSlice.reducer
