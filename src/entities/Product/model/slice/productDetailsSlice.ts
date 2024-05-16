import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductDetailsSchema } from '../types/productDetailsSchema';
import { fetchProductById } from '../services/fetchProductById/fetchProductById';
import { Product } from '../types/product';

export const initialState: ProductDetailsSchema = {
	isLoading: false,
};

const productDetailsSlice = createSlice({
	name: 'productDetails',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchProductById.pending, (state) => {
				state.data = undefined;
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchProductById.fulfilled, (state, action: PayloadAction<Product>) => {
				state.data = action.payload;
				state.isLoading = false;
			})
			.addCase(fetchProductById.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			});
	},
});

export const { actions: productDetailsActions } = productDetailsSlice;
export const { reducer: productDetailsReducer } = productDetailsSlice;
