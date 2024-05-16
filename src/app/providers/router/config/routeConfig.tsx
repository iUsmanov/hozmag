// #router
import { AppRouteObject, AppRoutes } from '@/shared/types/router';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { createBrowserRouter } from 'react-router-dom';
import {
	getRouteAbout,
	getRouteProductCreate,
	getRouteProductDetails,
	getRouteProductEdit,
	getRouteProducts,
	getRouteForbidden,
	getRouteMain,
	getRouteNotFound,
	getRouteProfile,
} from '@/shared/const/router';
// eslint-disable-next-line fsd-paths-guard/hierarchy-imports-between-layers
import { RootLayout } from '@/app/components/RootLayout';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { RequireAuth } from '../components/RequireAuth';
import { ProductsPage } from '@/pages/ProductsPage';
import { ProductDetailsPage } from '@/pages/ProductDetailsPage';
import { ProductEditPage } from '@/pages/ProductEditPage';
import { RequireRoles } from '../components/RequireRoles';
import { ForbiddenPage } from '@/pages/ForbiddenPage';

const routeConfig: Record<AppRoutes, AppRouteObject> = {
	main: {
		path: getRouteMain(),
		element: <MainPage />,
	},
	about: {
		path: getRouteAbout(),
		element: <AboutPage />,
	},
	profile: {
		path: getRouteProfile(':id'),
		element: <ProfilePage />,
		authOnly: true,
	},
	products: {
		path: getRouteProducts(),
		element: <ProductsPage />,
		authOnly: true,
	},
	product_details: {
		path: getRouteProductDetails(':id'),
		element: <ProductDetailsPage />,
		authOnly: true,
	},
	product_create: {
		path: getRouteProductCreate(),
		element: <ProductEditPage />,
		authOnly: true,
	},
	product_edit: {
		path: getRouteProductEdit(':id'),
		element: <ProductEditPage />,
		authOnly: true,
	},
	forbidden: {
		path: getRouteForbidden(),
		element: <ForbiddenPage />,
	},
	not_found: {
		path: getRouteNotFound(),
		element: <NotFoundPage />,
	},
};

export const routes = Object.values(routeConfig).map((route) => {
	if (route.authOnly) {
		const routeElement = route.element;
		route.element = <RequireAuth>{routeElement as JSX.Element}</RequireAuth>;
	}

	if (route.roles) {
		const routeElement = route.element;
		route.element = <RequireRoles roles={route.roles}>{routeElement as JSX.Element}</RequireRoles>;
	}

	return route;
});

export const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: routes,
	},
]);
