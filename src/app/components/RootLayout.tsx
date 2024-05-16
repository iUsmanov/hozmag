import { App } from './App/App';
import { ErrorBoundary } from '../providers/ErrorBoundary';
import { StoreProvider } from '../providers/StoreProvider';
import { Suspense, memo } from 'react';

export const RootLayout = memo(() => {
	return (
		<ErrorBoundary>
			<StoreProvider>
				<Suspense>
					<App />
				</Suspense>
			</StoreProvider>
		</ErrorBoundary>
	);
});
