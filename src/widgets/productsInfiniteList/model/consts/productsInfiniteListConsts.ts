import { ProductsInfiniteListSchema } from '../types/productsInfiniteListSchema';

export const initialState: ProductsInfiniteListSchema = {
	ids: [],
	entities: {},
	isLoading: false,
	error: undefined,
	hasMore: true,
	limit: 9,
	page: 1,
	_inited: false,
};
