import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { productsCategoriesActions } from '../../slice/productsCategoriesSlice';

export const initProductsCategory = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
	'productsCategory/initProductsCategory',
	async (searchParams, thunkAPI) => {
		const { dispatch } = thunkAPI;

		const categoryFromURL = searchParams.get('category');

		if (categoryFromURL) {
			dispatch(productsCategoriesActions.setCategory(categoryFromURL));
		}
	}
);
