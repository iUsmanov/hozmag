import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../slice/productsCategoriesSlice';

export const getProductsCategory = (state: StateSchema) =>
	state.productsCategories?.category ?? initialState.category;
