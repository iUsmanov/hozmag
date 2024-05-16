import { HTMLAttributeAnchorTarget, memo } from 'react';
import cls from './ProductList.module.scss';
import { VirtuosoGrid } from 'react-virtuoso';
import { Product } from '../../model/types/product';
import { HStack } from '@/shared/ui/Stack';
import classNames from 'classnames';
import { useProductsList } from '../../lib/hooks/useProductsList';

export interface ProductListProps {
	className?: string;
	products?: Product[];
	isLoading?: boolean;
	target?: HTMLAttributeAnchorTarget;
	endReached?: VoidFunction;
	virtualization?: boolean;
}

export const ProductList = memo((props: ProductListProps) => {
	const { className, products, isLoading, target, endReached, virtualization = false } = props;

	const {
		Footer,
		renderProductVirtualization,
		renderProducts,
		renderSkeletons,
		currentProductId,
		virtuosoGridRef,
		mainRef,
	} = useProductsList({
		products,
		className,
		isLoading,
		target,
		virtualization,
		endReached,
	});

	if ((!products || !products.length) && !isLoading) {
		return <div>Статьи не найдены</div>;
	}

	return (
		<div>
			{virtualization ? (
				<VirtuosoGrid
					ref={virtuosoGridRef}
					style={{ height: '100%', width: '100%' }}
					data={products}
					endReached={endReached}
					totalCount={products?.length}
					itemContent={renderProductVirtualization}
					components={{
						Footer: Footer,
						ScrollSeekPlaceholder: Footer,
					}}
					listClassName={cls.flex}
					customScrollParent={mainRef.current}
				/>
			) : (
				<HStack
					gap='32'
					wrap='wrap'
					max
					className={classNames(cls.productList, {}, [className])}
					data-testid='ProductList'
				>
					{renderProducts}
					{renderSkeletons}
				</HStack>
			)}
		</div>
	);
});

/* 

<VStack
						max
						className={classNames(cls.productList, {}, [className, cls[view]])}
						data-testid='ProductList.LIST'
					>
						{renderProducts}
						{renderSkeletons}
					</VStack>

*/
