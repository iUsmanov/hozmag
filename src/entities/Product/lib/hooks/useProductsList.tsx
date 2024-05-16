import { HTMLAttributeAnchorTarget, useCallback, useEffect, useRef, useState } from 'react';
import cls from '../../components/ProductList/ProductList.module.scss';
import { SESSION_STORAGE_CURRENT_ARTICLE_ID_KEY } from '@/shared/const/sessionStorage';
import { ProductListItem } from '../../components/ProductListItem/ProductListItem';
import { VirtuosoGridHandle } from 'react-virtuoso';
import { ProductListSkeleton } from '../../components/ProductList/ProductListSkeleton';
import { getTilesQuantity } from '../helpers/getTilesQuantity';
import { Product } from '../../model/types/product';

interface UseProductListMatrixProps {
	className?: string;
	products?: Product[];
	isLoading?: boolean;
	target?: HTMLAttributeAnchorTarget;
	endReached?: VoidFunction;
	virtualization: boolean;
}

export const useProductsList = (props: UseProductListMatrixProps) => {
	const { className, products, isLoading, target, virtualization, endReached } = props;
	const [currentProductId, setCurrentProductId] = useState<number>(1);
	const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);
	const mainRef = useRef();
	mainRef.current = document.querySelector('main') as any;

	const renderProduct = useCallback(
		(product: Product) => {
			return (
				<ProductListItem target={target} key={product.id} product={product} className={cls.card} />
			);
		},
		[target]
	);

	const renderProductVirtualization = useCallback(
		(index: number, product: Product) => {
			return (
				<div style={{ height: 286, width: 230 }}>
					<ProductListItem
						target={target}
						key={product.id}
						product={product}
						className={cls.card}
						index={index}
					/>
				</div>
			);
		},
		[target]
	);

	const Footer = () => {
		if (isLoading) {
			return <ProductListSkeleton className={className} />;
		}

		return null;
	};

	const renderProducts = products && products.length && products.map(renderProduct);
	const renderSkeletons = isLoading && <ProductListSkeleton className={className} />;

	useEffect(() => {
		if (!virtualization) return;
		const currentProductIdFromSessionStorage =
			Number(sessionStorage.getItem(SESSION_STORAGE_CURRENT_ARTICLE_ID_KEY)) ?? 0;

		setCurrentProductId(currentProductIdFromSessionStorage);
	}, [virtualization]);

	useEffect(() => {
		if (!virtualization) return;
		const timeout = setTimeout(() => {
			if (virtuosoGridRef.current) {
				virtuosoGridRef.current.scrollToIndex(currentProductId);
			}
		}, 100);

		return () => clearTimeout(timeout);
	}, [currentProductId, virtualization]);

	useEffect(() => {
		if (products && products?.length < getTilesQuantity()) {
			endReached?.();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		renderProductVirtualization,
		renderProducts,
		renderSkeletons,
		Footer,
		currentProductId,
		virtuosoGridRef,
		mainRef,
	};
};
