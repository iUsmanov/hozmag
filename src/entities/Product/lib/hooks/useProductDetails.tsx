import { useMemo } from 'react';
import { ReducersList, useDynamicModule } from '@/shared/lib/hooks/useDynamicModule/useDynamicModule';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchProductById } from '../../model/services/fetchProductById/fetchProductById';
import { productDetailsReducer } from '../../model/slice/productDetailsSlice';

export function useProductDetails(productId: string | undefined, cls: Record<string, string>) {
	const dispatch = useAppDispatch();

	const reducers = useMemo<ReducersList>(
		() => ({
			productDetails: productDetailsReducer,
		}),
		[]
	);

	useDynamicModule({ reducers });

	useInitialEffect(() => {
		if (!productId) return;
		dispatch(fetchProductById(productId));
	});

	return {};
}
