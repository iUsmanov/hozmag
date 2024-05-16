import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../slice/productsSearchSlice';

export const getProductsSearch = (state: StateSchema) =>
	state.productsSearch?.search ?? initialState.search;
