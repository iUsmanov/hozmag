import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductsSearchSchema } from '../types/productsSearch';

export const initialState: ProductsSearchSchema = {
	search: '',
};

export const productsSearchSlice = createSlice({
	name: 'productsSearch',
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
	},
});

export const { actions: productsSearchActions } = productsSearchSlice;
export const { reducer: productsSearchReducer } = productsSearchSlice;
