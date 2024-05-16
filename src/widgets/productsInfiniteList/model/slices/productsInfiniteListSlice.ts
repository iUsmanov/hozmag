import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Product } from '@/entities/Product';
import { fetchProductsList } from '../services/fetchProductsList/fetchProductsList';
import { ProductsInfiniteListSchema } from '../types/productsInfiniteListSchema';
import { initialState } from '../consts/productsInfiniteListConsts';
import { getTilesQuantity } from '@/entities/Product';

const productsInfiniteListAdapter = createEntityAdapter<Product>({
	selectId: (product) => product.id,
});

export const getProductsInfiniteList = productsInfiniteListAdapter.getSelectors<StateSchema>(
	(state) => state.productsInfiniteList || productsInfiniteListAdapter.getInitialState()
);

export const productsInfiniteListSlice = createSlice({
	name: 'productsInfiniteListSlice',
	initialState: productsInfiniteListAdapter.getInitialState<ProductsInfiniteListSchema>(initialState),
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		initState: (state) => {
			state.limit = getTilesQuantity();
			state._inited = true;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchProductsList.pending, (state, action) => {
				// state.data = undefined;
				state.error = undefined;
				state.isLoading = true;

				if (action.meta.arg.replace) {
					productsInfiniteListAdapter.removeAll(state);
				}
			})
			.addCase(fetchProductsList.fulfilled, (state, action /* : PayloadAction<Product[]> */) => {
				// state.data = action.payload;
				state.isLoading = false;
				state.hasMore = action.payload.length === state.limit;

				if (action.meta.arg.replace) {
					productsInfiniteListAdapter.setAll(state, action.payload);
				} else {
					productsInfiniteListAdapter.addMany(state, action.payload);
				}
			})
			.addCase(fetchProductsList.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			});
	},
});

export const { actions: productsInfiniteListActions } = productsInfiniteListSlice;
export const { reducer: productsInfiniteListReducer } = productsInfiniteListSlice;
