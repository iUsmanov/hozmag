import { memo } from 'react';
import cls from './ProductList.module.scss';
import { ProductListItemSkeleton } from '../ProductListItemSkeleton/ProductListItemSkeleton';
import { VStack } from '@/shared/ui/Stack';
import classNames from 'classnames';

interface ProductListSkeletonProps {
	className?: string;
}

export const ProductListSkeleton = memo((props: ProductListSkeletonProps) => {
	const { className } = props;

	return (
		<VStack max className={classNames(cls.productList, {}, [className])}>
			{new Array(3).fill(0).map((item, index) => (
				<ProductListItemSkeleton key={index} className={cls.card} />
			))}
		</VStack>
	);
});
