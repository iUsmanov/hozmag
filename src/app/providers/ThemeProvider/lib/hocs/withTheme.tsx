// #theme
import { ThemeProvider } from '../../components/ThemeProvider';

export const withTheme = (Component: React.ComponentType) => {
	return () => {
		return (
			<ThemeProvider initialTheme={'app-light-theme'}>
				<Component />
			</ThemeProvider>
		);
	};
};
