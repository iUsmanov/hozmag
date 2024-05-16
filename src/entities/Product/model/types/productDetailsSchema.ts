import { Product } from './product';

export interface ProductDetailsSchema {
	data?: Product;
	isLoading: boolean;
	error?: string;
}
