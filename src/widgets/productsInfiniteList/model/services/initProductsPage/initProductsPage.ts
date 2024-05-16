import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsList } from '../fetchProductsList/fetchProductsList';
import { productsInfiniteListActions } from '../../slices/productsInfiniteListSlice';
import { getProductsInfiniteListInited } from '../../selectors/productsInfiniteListSelectors';

export const initProductsPage = createAsyncThunk<void, void, ThunkConfig<string>>(
	'productsPage/initProductsPage',
	async (_, thunkAPI) => {
		const { getState, dispatch } = thunkAPI;
		const inited = getProductsInfiniteListInited(getState());

		if (inited) return;
		dispatch(productsInfiniteListActions.initState());
		dispatch(fetchProductsList({}));
	}
);
