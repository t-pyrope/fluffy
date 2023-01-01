import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import {ISimpleProduct} from "../../models";

interface ProductState {
    products: ISimpleProduct[]
}

const initialState: ProductState = {
    products: []
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        initProducts: (state, action: PayloadAction<ISimpleProduct[]>) => {
            return { ...state, products: action.payload }
        },
    }
})

export const { initProducts } = productsSlice.actions;

export default productsSlice.reducer
