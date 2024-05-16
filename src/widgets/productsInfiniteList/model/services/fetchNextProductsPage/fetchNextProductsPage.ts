import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsList } from '../fetchProductsList/fetchProductsList';
import {
	getProductsInfiniteListHasMore,
	getProductsInfiniteListIsLoading,
	getProductsInfiniteListNumber,
} from '../../selectors/productsInfiniteListSelectors';
import { productsInfiniteListActions } from '../../slices/productsInfiniteListSlice';

export const fetchNextProductsPage = createAsyncThunk<void, void, ThunkConfig<string>>(
	'productsPage/fetchNextProductsPage',
	async (_, thunkAPI) => {
		const { getState, dispatch } = thunkAPI;
		const page = getProductsInfiniteListNumber(getState());
		const hasMore = getProductsInfiniteListHasMore(getState());
		const isLoading = getProductsInfiniteListIsLoading(getState());

		if (!hasMore || isLoading) return;
		dispatch(productsInfiniteListActions.setPage(page + 1));
		dispatch(fetchProductsList({}));
	}
);
