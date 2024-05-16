import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getProductsCategory } from '../model/selectors/getProductsCategory';

interface ProductsCategoriesProps {
	className?: string;
	onChangeType: () => void;
}

export const ProductsCategories = memo((props: ProductsCategoriesProps) => {
	const { className, onChangeType } = props;
	const type = useSelector(getProductsCategory);
	// const {} = useProductsCategories(onChangeType);

	return <div>Categories</div>;
});
