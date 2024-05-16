import { memo } from 'react';
import { useSelector } from 'react-redux';
import { PageMainContent } from '@/widgets/PageMainContent';
import { ProductsInfiniteList, getProductsInfiniteListError } from '@/widgets/productsInfiniteList';

export const ProductsPage = memo(() => {
	const error = useSelector(getProductsInfiniteListError);

	return (
		<PageMainContent data-testid='ProductsPage'>
			<ProductsInfiniteList />
			{/* Не забывать, что если здесь появится контент, который будет ниже, использовать констркуцию {!error && <>{JSX}</>} */}
		</PageMainContent>
	);
});
