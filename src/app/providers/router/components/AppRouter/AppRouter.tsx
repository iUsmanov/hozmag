// #router
import { Suspense, memo } from 'react';
import { Outlet } from 'react-router-dom';

export const AppRouter = memo(() => {
	return (
		<Suspense fallback={'Loader...'}>
			<Outlet />
		</Suspense>
	);
});
