import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    orders: [],
}

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrder(state, action) {
            state.orders.push(action.payload)
        }
    }
})

export const {addOrder} = ordersSlice.actions
export const selectAllOrders = (state) => state.orders.orders
export default ordersSlice.reducer