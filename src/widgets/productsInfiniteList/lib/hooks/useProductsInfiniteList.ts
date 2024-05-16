import { MutableRefObject, useCallback, useMemo, useRef } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
	productsInfiniteListActions,
	productsInfiniteListReducer,
} from '../../model/slices/productsInfiniteListSlice';
import { ReducersList, useDynamicModule } from '@/shared/lib/hooks/useDynamicModule/useDynamicModule';
import { initProductsPage } from '../../model/services/initProductsPage/initProductsPage';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchProductsList } from '../../model/services/fetchProductsList/fetchProductsList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { fetchNextProductsPage } from '../../model/services/fetchNextProductsPage/fetchNextProductsPage';
import { useSelector } from 'react-redux';
import { getProductsInfiniteListIsLoading } from '../../model/selectors/productsInfiniteListSelectors';

export function useProductsInfiniteList() {
	const dispatch = useAppDispatch();
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
	const isLoading = useSelector(getProductsInfiniteListIsLoading);

	const reducers = useMemo<ReducersList>(
		() => ({
			productsInfiniteList: productsInfiniteListReducer,
		}),
		[]
	);

	useDynamicModule({ reducers, saveAfterUnmount: true });

	useInitialEffect(() => {
		dispatch(initProductsPage());
	});

	const fetchData = useCallback(() => {
		dispatch(fetchProductsList({ replace: true }));
	}, [dispatch]);

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextProductsPage());
	}, [dispatch]);

	// useInfiniteScroll({
	// 	triggerRef: triggerRef,
	// 	parentRef: undefined,
	// 	callback: isLoading ? undefined : onLoadNextPart,
	// });

	const debouncedFetchData = useDebounce(fetchData, 500);

	const onChangeSearch = useCallback(() => {
		dispatch(productsInfiniteListActions.setPage(1));
		debouncedFetchData();
	}, [dispatch, debouncedFetchData]);

	const onChangeCategory = useCallback(() => {
		dispatch(productsInfiniteListActions.setPage(1));
		fetchData();
	}, [dispatch, fetchData]);

	return {
		onChangeSearch,
		onChangeCategory,
		triggerRef,
		onLoadNextPart,
	};
}
