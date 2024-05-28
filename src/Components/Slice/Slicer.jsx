import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name : 'counter',
    initialState:{
        count: 0
    },
    reducers:{
        increment: (state)=>{
            state.count+=1;
        },
        decrement: (state)=>{
            state.count-=1;
        }
    }
})



const cartSlice = createSlice({
    name : 'cart',
    initialState:{
        items:[
            {id: 1, name:'Asus', quantity:0},
            {id: 2, name:'Lenovo', quantity:0},
            {id: 3, name:'Dell', quantity:0},
            {id: 4, name:'Hp', quantity:0},
            {id: 5, name:'Acer', quantity:0}
        ]
    },
    reducers:{
        increase: (state, action)=>{
            const item = state.items.find(item=> item.id === action.payload);
            if(item){
                item.quantity+=1;
            }
        },
        decrease: (state, action)=>{
            const item = state.items.find(item => item.id === action.payload);
            if(item){
                if(item.quantity<1){
                    item.quantity =0;
                }else{
                    item.quantity-=1;
                }
            }
        }
    }

})

export const {increase, decrease}  = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

 export const {increment, decrement} = counterSlice.actions;
 export default counterSlice.reducer;