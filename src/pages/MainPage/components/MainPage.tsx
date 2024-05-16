// eslint-disable-next-line fsd-paths-guard/public-api-imports
import { PageMainContent } from '@/widgets/PageMainContent';
import { memo } from 'react';

export const MainPage = memo(() => {
	return <PageMainContent data-testid='MainPage'>Главная страница</PageMainContent>;
});
