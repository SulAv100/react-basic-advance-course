import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { cartReducer } from '../Slice/Slicer'


const store = configureStore({
    reducer : {
        counter : counterReducer,
        cart : cartReducer
    }
  
})
export default store