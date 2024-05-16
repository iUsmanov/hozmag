import { useCallback, useMemo } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { productsCategoriesReducer } from '../../model/slice/productsCategoriesSlice';
import { ReducersList, useDynamicModule } from '@/shared/lib/hooks/useDynamicModule/useDynamicModule';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { initProductsCategory } from '../../model/services/initProductsCategory/initProductsCategory';
import { useSearchParams } from 'react-router-dom';

export function useProductsCategories() {
	const dispatch = useAppDispatch();
	const [searchParams] = useSearchParams();

	const reducers = useMemo<ReducersList>(
		() => ({
			productsCategories: productsCategoriesReducer,
		}),
		[]
	);

	useDynamicModule({ reducers, saveAfterUnmount: true });

	useInitialEffect(() => {
		dispatch(initProductsCategory(searchParams));
	});

	const onChangeCategory = useCallback(() => {}, []);

	return {
		onChangeCategory,
	};
}
