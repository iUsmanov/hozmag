import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Product } from '../../types/product';

export const fetchProductById = createAsyncThunk<Product, string, ThunkConfig<string>>(
	'productDetails/fetchProductById',
	async (productId, thunkAPI) => {
		const { rejectWithValue, extra } = thunkAPI;
		try {
			const response = await extra.api.get<Product>(`/products/${productId}`, {
				params: {
					_expand: 'user',
				},
			});

			// const response: any = { data: {} };

			if (!response.data) {
				throw new Error();
			}
			return response.data;
		} catch (error) {
			console.log(error);
			return rejectWithValue('error');
		}
	}
);
