import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getProductsSearch } from '../model/selectors/getProductsSearch';
import { useProductsSearch } from '../lib/hooks/useProductsSearch';
import { Input } from '@/shared/ui/Input';
import classNames from 'classnames';

export interface ProductsSearchProps {
	className?: string;
	onChangeSearch: () => void;
}

export const ProductsSearch = memo((props: ProductsSearchProps) => {
	const { className, onChangeSearch } = props;
	const search = useSelector(getProductsSearch);
	const { changeSearchHandler } = useProductsSearch(onChangeSearch);

	return (
		<Input
			data-testid='ProductsSearch'
			className={classNames('', {}, [className])}
			placeholder={'Поиск'}
			value={search}
			onChange={changeSearchHandler}
			size={'s'}
		/>
	);
});
