import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductsCategoriesSchema } from '../types/productsCategories';
import { ProductCategory } from '@/entities/Product';

export const initialState: ProductsCategoriesSchema = {
	category: {
		name: 'all',
	},
};

export const productsCategoriesSlice = createSlice({
	name: 'productsCategories',
	initialState,
	reducers: {
		setCategory: (state, action: PayloadAction<string>) => {
			const category: ProductCategory = {
				name: 'all',
			};
			state.category = category;
		},
	},
});

export const { actions: productsCategoriesActions } = productsCategoriesSlice;
export const { reducer: productsCategoriesReducer } = productsCategoriesSlice;
