import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getProductsInfiniteList } from '../../model/slices/productsInfiniteListSlice';
import {
	getProductsInfiniteListError,
	getProductsInfiniteListIsLoading,
} from '../../model/selectors/productsInfiniteListSelectors';
import { ProductList } from '@/entities/Product';
import { ProductsSearch } from '@/features/ProductsSearch';
import { StickyContentLayout } from '@/shared/layouts';
import { useProductsInfiniteList } from '../../lib/hooks/useProductsInfiniteList';
import classNames from 'classnames';

export interface ProductsInfiniteListProps {
	className?: string;
}

export const ProductsInfiniteList = memo((props: ProductsInfiniteListProps) => {
	const { className } = props;
	const products = useSelector(getProductsInfiniteList.selectAll);
	const isLoading = useSelector(getProductsInfiniteListIsLoading);
	const error = useSelector(getProductsInfiniteListError);

	const { onChangeCategory, onChangeSearch, triggerRef, onLoadNextPart } = useProductsInfiniteList();

	if (error) {
		return <div>Произошла непредвиденная ошибка</div>;
	}

	return (
		<StickyContentLayout
			data-testid='ProductsInfiniteList'
			content={
				<div style={{ height: '100%' }}>
					<ProductList
						className={classNames('', {}, [className])}
						products={products}
						isLoading={isLoading}
						endReached={onLoadNextPart}
						virtualization
					/>
					<div ref={triggerRef} />
				</div>
			}
			right={<ProductsSearch onChangeSearch={onChangeSearch} />}
		/>
	);
});
