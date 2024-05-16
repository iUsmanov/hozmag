import { PageMainContent } from '@/widgets/PageMainContent';
import { memo } from 'react';
import { useParams } from 'react-router-dom';

export const ProductEditPage = memo(() => {
	const { id } = useParams<{ id: string }>();

	return (
		<PageMainContent data-testid='ProductEditPage'>
			{'Редактирование товара с ID =' + id}
		</PageMainContent>
	);
});
