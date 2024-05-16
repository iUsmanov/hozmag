import { memo } from 'react';
import cls from './NotFoundPage.module.scss';
import { PageMainContent } from '@/widgets/PageMainContent';
import { HStack } from '@/shared/ui/Stack';

export const NotFoundPage = memo(() => {
	return (
		<PageMainContent data-testid='NotFoundPage'>
			<HStack justify='center' align='center' className={cls.notFoundPage}>
				Страница не найдена
			</HStack>
		</PageMainContent>
	);
});
