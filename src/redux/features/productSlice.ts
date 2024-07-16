import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
type TFilter = {
  searchValue: string;
  max: number;
  min: number;
  sort: string;
};

const initialState: TFilter = {
 
    searchValue: "",
    max: 1000,
    min: 0,
    sort: "low",
  
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
        state.searchValue = action.payload;
      },
      maxPrice: (state, action: PayloadAction<number>) => {
        state.max = action.payload;
      },
      minPrice: (state, action: PayloadAction<number>) => {
        state.min = action.payload;
      },
      sorted: (state, action: PayloadAction<string>) => {
        state.sort = action.payload;
      },
  },
});

export const { search, maxPrice, minPrice, sorted } = productSlice.actions;

export default productSlice.reducer;
