import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { productsSearchActions } from '../../slice/productsSearchSlice';

export const initProductsSearch = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
	'productsSearch/initProductsSearch',
	async (searchParams, thunkAPI) => {
		const { dispatch } = thunkAPI;

		const searchFromURL = searchParams.get('search');

		if (searchFromURL) {
			dispatch(productsSearchActions.setSearch(searchFromURL));
		}
	}
);
