import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../consts/productsInfiniteListConsts';

export const getProductsInfiniteListIsLoading = (state: StateSchema) =>
	state.productsInfiniteList?.isLoading || initialState.isLoading;

export const getProductsInfiniteListError = (state: StateSchema) => state.productsInfiniteList?.error;

export const getProductsInfiniteListLimit = (state: StateSchema) =>
	state.productsInfiniteList?.limit || 9;
export const getProductsInfiniteListHasMore = (state: StateSchema) =>
	state.productsInfiniteList?.hasMore;
export const getProductsInfiniteListNumber = (state: StateSchema) =>
	state.productsInfiniteList?.page || initialState.page;
export const getProductsInfiniteListInited = (state: StateSchema) =>
	state.productsInfiniteList?._inited || initialState._inited;
