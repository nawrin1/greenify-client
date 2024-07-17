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
    total:number
}

const initialState:TinitialState = {
 
   cart:[],
   total:0
  
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
    total: (state, action) => {
        // console.log(state.cart,action.payload)
        let totalV=0
        const totalValue=state.cart.map((each,index)=>{
            
                totalV+=each.quantity
            
        })
        console.log(totalValue,"total qu")
        state.total=totalV

        // state.cart.push(action.payload)
      },
     emptyCart: (state) => {
        
        
        state.total=0
        state.cart=[]

        
      },
     
  },
});

export const { addProduct,updateCart,total,emptyCart} = cartSlice.actions;

export default cartSlice.reducer;
