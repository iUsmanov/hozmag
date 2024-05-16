import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import cls from './ProductListItem.module.scss';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteProductDetails } from '@/shared/const/router';
import { SESSION_STORAGE_CURRENT_ARTICLE_ID_KEY } from '@/shared/const/sessionStorage';
import { Product } from '../../model/types/product';
import classNames from 'classnames';

interface ProductListItemProps {
	className?: string;
	product: Product;
	target?: HTMLAttributeAnchorTarget;
	index?: number;
}

export const ProductListItem = memo((props: ProductListItemProps) => {
	const { className, product, target, index } = props;

	const saveProductId = useCallback(() => {
		if (!index) return;
		sessionStorage.setItem(SESSION_STORAGE_CURRENT_ARTICLE_ID_KEY, JSON.stringify(index));
	}, [index]);

	const categories = <div className={cls.category}>{product.categories.name}</div>;

	return (
		<AppLink to={getRouteProductDetails(product.id)} target={target} onClick={saveProductId}>
			<div className={classNames('', {}, [className])}>
				{/* <div className={cls.image}>
					<AppImage
						loadingFallback={<Skeleton width={200} height={200} />}
						src={product.img}
						alt={product.title}
						className={cls.img}
					/>
				</div> */}
				{categories}
				<div className={cls.title}>{product.name}</div>
			</div>
		</AppLink>
	);
});
