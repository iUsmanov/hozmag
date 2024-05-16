import { lazy } from 'react';

export const ProductDetailsPageAsync = lazy(() =>
	import('./ProductDetailsPage').then((module) => ({
		default: module.ProductDetailsPage,
	}))
);
