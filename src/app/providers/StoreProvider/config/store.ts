// #store
import { Action, Reducer, configureStore } from '@reduxjs/toolkit';
import { ReducersObject, StateSchema, ThunkExtraArg } from './StateSchema';
import { userReducer } from '@/entities/User';
import { createReducerManager } from './reducerManager';
import { rtkApi } from '@/shared/api/rtkApi';
import { uiReducer } from '@/shared/lib/UI';

/**
 * @param children - что мы хотим обернуть в Provider?
 * @param initialState - Состояние стейта по умолчанию. Используется только в тестах и сторибуке.
 * Предназначен для мокания стейта.
 * @param asyncReducers - Редюсеры стора по умолчанию. Используется только в тестах и сторибуке.
 * Предназначен для мокания редюсеров.
 * */
export const createReduxStore = (initialState?: StateSchema, asyncReducers?: ReducersObject) => {
	const rootReducer: ReducersObject = {
		...asyncReducers,
		user: userReducer,
		ui: uiReducer,
		[rtkApi.reducerPath]: rtkApi.reducer,
	};

	const reducerManager = createReducerManager(rootReducer);

	const extraArg: ThunkExtraArg = {};

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<StateSchema, Action>,
		preloadedState: initialState,
		devTools: __IS_DEV__,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: extraArg,
				},
			}).concat(rtkApi.middleware /* , authMiddleware */),
	});
	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
};
