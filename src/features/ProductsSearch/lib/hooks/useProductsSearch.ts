import { useCallback, useMemo } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducersList, useDynamicModule } from '@/shared/lib/hooks/useDynamicModule/useDynamicModule';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSearchParams } from 'react-router-dom';
import { productsSearchActions, productsSearchReducer } from '../../model/slice/productsSearchSlice';
import { initProductsSearch } from '../../model/services/initProductsSearch/initProductsSearch';

export function useProductsSearch(onChangeSearch: VoidFunction) {
	const dispatch = useAppDispatch();
	const [searchParams] = useSearchParams();

	const reducers = useMemo<ReducersList>(
		() => ({
			productsSearch: productsSearchReducer,
		}),
		[]
	);

	useDynamicModule({ reducers, saveAfterUnmount: true });

	useInitialEffect(() => {
		dispatch(initProductsSearch(searchParams));
	});

	const changeSearchHandler = useCallback(
		(search: string) => {
			dispatch(productsSearchActions.setSearch(search));
			onChangeSearch();
		},
		[dispatch, onChangeSearch]
	);
	return {
		changeSearchHandler,
	};
}
