import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../slice/productDetailsSlice';

export const getProductDetailsData = (state: StateSchema) => state?.productDetails?.data;
export const getProductDetailsIsLoading = (state: StateSchema) =>
	state?.productDetails?.isLoading || initialState.isLoading;
export const getProductDetailsError = (state: StateSchema) => state?.productDetails?.error;
