import { createSlice } from "@reduxjs/toolkit";
// import { produce } from "immer";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {

        // {payload : "Pizza"} and add it to the 2nd argument as the action

        addItem : (state, action) => {
            // redux toolkit uses immer behind the scene 
            // mutating the state here
            state.items.push(action.payload);
            // return produce(state,draft => {
            //     draft.items.push(action.payload)
            // })
        },
        removeItem : (state) => {
            state.items.pop()
            // return produce(state,draft => draft.items.pop())
        },
        clearCart : (state) => {
            state.items = [];
            // return produce(state,draft => {
            //     console.log("emptying the cart")
            //     draft.items = []})
        },
    },
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;

/**
 *  underneath the hood, this cartSlice is a whole big object which looks something like,:
 *      {
 *          actions : {
 *                addItem
 *          },
 *          reducer
 *
 *      }
 */

{/* <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg> */}
