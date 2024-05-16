import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Product } from '@/entities/Product';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import { getProductsSearch } from '@/features/ProductsSearch';
import {
	getProductsInfiniteListLimit,
	getProductsInfiniteListNumber,
} from '../../selectors/productsInfiniteListSelectors';
import { getProductsCategory } from '@/features/ProductsCategories';

interface FetchProductsListProps {
	replace?: boolean;
}

export const fetchProductsList = createAsyncThunk<
	Product[],
	FetchProductsListProps,
	ThunkConfig<string>
>('productsPage/fetchProductsList', async (_, thunkAPI) => {
	const { rejectWithValue, extra, getState } = thunkAPI;
	const limit = getProductsInfiniteListLimit(getState());
	const page = getProductsInfiniteListNumber(getState());

	const search = getProductsSearch(getState());
	const category = getProductsCategory(getState());

	try {
		addQueryParams({
			search,
			category: 'all',
		});
		const response = await extra.api.get<Product[]>('/products', {
			params: {
				_expand: 'user',
				_limit: limit,
				_page: page,
				q: search,
			},
		});
		if (!response.data) {
			throw new Error();
		}
		return response.data;
	} catch (error) {
		console.log(error);
		return rejectWithValue('error');
	}
});
