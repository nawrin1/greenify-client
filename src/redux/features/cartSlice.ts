import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
type TCart = {
  _id: string;
  title: string;
  price: number;
  quantity: number;
};
type TinitialState={
    cart:TCart[];
}

const initialState:TinitialState = {
 
   cart:[]
  
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TCart>) => {
        state.cart.push(action.payload)
      },
    updateCart: (state, action: PayloadAction<Record<string, unknown>>) => {
        // console.log(state.cart,action.payload)
        state.cart.find((each,index)=>{
            if (each._id==action.payload._id){
                state.cart[index].quantity=state.cart[index].quantity+1
            }
        })
        // console.log(state.cart)

        // state.cart.push(action.payload)
      },
     
  },
});

export const { addProduct,updateCart} = cartSlice.actions;

export default cartSlice.reducer;
