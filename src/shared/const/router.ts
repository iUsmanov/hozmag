// #router
import { AppRoutes } from '../types/router';

export const getRouteMain = () => `/`;
export const getRouteAbout = () => `/about`;
export const getRouteProfile = (id: string) => `/profiles/${id}`;
export const getRouteProducts = () => `/products`;
export const getRouteProductDetails = (id: string) => `/products/${id}`;
export const getRouteProductCreate = () => `/products/create`;
export const getRouteProductEdit = (id: string) => `/products/${id}/edit`;
export const getRouteAdminPanel = () => `/admin`;
export const getRouteSettings = () => `/settings`;
export const getRouteForbidden = () => `/forbidden`;
export const getRouteNotFound = () => `/*`;

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
	[getRouteMain()]: 'main',
	[getRouteAbout()]: 'about',
	[getRouteProfile(':id')]: 'profile',
	[getRouteProducts()]: 'products',
	[getRouteProductDetails(':id')]: 'product_details',
	[getRouteProductCreate()]: 'product_create',
	[getRouteProductEdit(':id')]: 'product_edit',
	[getRouteForbidden()]: 'forbidden',
};
