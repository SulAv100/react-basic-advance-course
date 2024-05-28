import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Slice/Slicer'


const store = configureStore({
    reducer : {
        counter : counterReducer
    }
  
})
export default store