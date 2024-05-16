// #router
// eslint-disable-next-line fsd-paths-guard/hierarchy-imports-between-layers
import { UserRole } from '@/entities/User';
import { RouteObject } from 'react-router-dom';

export type AppRoutes =
	| 'main'
	| 'about'
	| 'profile'
	| 'products'
	| 'product_details'
	| 'product_create'
	| 'product_edit'
	| 'forbidden'
	// last
	| 'not_found';

export type AppRouteObject = RouteObject & {
	authOnly?: boolean;
	roles?: UserRole[];
};
