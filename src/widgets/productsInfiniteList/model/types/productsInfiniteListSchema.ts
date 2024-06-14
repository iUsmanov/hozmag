import { Product } from '@/entities/Product';
import { EntityState } from '@reduxjs/toolkit';

export interface ProductsInfiniteListSchema extends EntityState<Product, string> {
	// ids: string[];
	// entities: Record<any, any>;
	// =======
	// data?: Comment[];
	isLoading?: boolean;
	error?: string;
	_inited: boolean;
	// pagination
	page: number;
	limit: number;
	hasMore: boolean;
}
