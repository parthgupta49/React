import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './slices/cart'
import cart from "./slices/cart";
const appStore = configureStore({
    reducer : {
        cart : cartReducer,
        
    }
});

export default appStore;
