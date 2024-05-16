import { lazy } from 'react';

export const ProductEditPageAsync = lazy(() =>
	import('./ProductEditPage').then((module) => ({ default: module.ProductEditPage }))
);
