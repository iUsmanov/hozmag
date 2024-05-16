import { memo } from 'react';
import cls from '../../ProductListItem/ProductListItem.module.scss';
import { Skeleton } from '@/shared/ui/Skeleton';
import classNames from 'classnames';

export interface ProductListItemSkeletonMatrixProps {
	className?: string;
}

export const ProductListItemSkeleton = memo((props: ProductListItemSkeletonMatrixProps) => {
	const { className } = props;

	return (
		<div className={classNames(cls.productListItem, {}, [className])}>
			<div className={cls.image}>
				<Skeleton width={200} height={200} className={cls.img} />
			</div>
			<Skeleton width={130} height={16} style={{ marginBottom: 8 }} />
			<Skeleton width={150} height={16} className={cls.title} />
		</div>
	);
});
