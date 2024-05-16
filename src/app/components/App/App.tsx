import { memo, useEffect } from 'react';
import { getUserInited, initAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';
import { PageLoader } from '@/widgets/PageLoader';
import { withTheme } from '../../providers/ThemeProvider';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

const App = memo(() => {
	const inited = useSelector(getUserInited);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!inited) {
			dispatch(initAuthData());
		}
	}, [dispatch, inited]);

	if (!inited) {
		return <PageLoader />;
	}

	return (
		<div className={'app'} data-testid='App'>
			App
		</div>
	);
});

const AppWithTheme = withTheme(App);
export { AppWithTheme as App };
