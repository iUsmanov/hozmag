// #store
import { UserSchema } from '@/entities/User';
import { createReduxStore } from './store';
import { Action, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { EnhancedStore } from '@reduxjs/toolkit/dist/configureStore';
import { rtkApi } from '@/shared/api/rtkApi';
import { UISchema } from '@/shared/lib/UI';
import { ProfileSchema } from '@/features/EditableProfileCard';
import { ProductDetailsSchema } from '@/entities/Product';
import { ProductsInfiniteListSchema } from '@/widgets/productsInfiniteList';
import { ProductsSearchSchema } from '@/features/ProductsSearch';
import { ProductsCategoriesSchema } from '@/features/ProductsCategories';
import { LoginSchema } from '@/features/AuthByUsername';

/**
 * StateSchema описывает состояние нашего `store`.
 * */
export interface StateSchema {
	user: UserSchema;
	ui: UISchema;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

	// Async reducers
	loginForm?: LoginSchema;
	profile?: ProfileSchema;
	productDetails?: ProductDetailsSchema;
	productsCategories?: ProductsCategoriesSchema;
	productsInfiniteList?: ProductsInfiniteListSchema;
	productsSearch?: ProductsSearchSchema;
}

/**
 * ReducerManager описывает методы нашего reducerManager.
 * */
export interface ReducerManager {
	getReducerMap: () => ReducersObject;
	reduce: (state: StateSchema, action: Action) => StateSchema;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}
/**
 * ReduxStoreWithManager является типом нашего `store` и наделяет его reducerManager-ом.
 * */
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema, Action> {
	reducerManager: ReducerManager;
}
// type SS = EnhancedStore<StateSchema, Action>;
/**
 * Тип ThunkExtraArg описывает extra-аргумент, который мы при конфигурации `store` прокидываем в каждый
 * `Thunk` и можем достать из `ThunkConfig` в наших `AsyncThunks`.
 * */
export interface ThunkExtraArg {}

/**
 * Тип ThunkConfig описывает конфиг наших `AsyncThunks`.
 * */
export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}

/**
 * Тип AppDispatch описывает наш dispatch.
 * */
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

/**
 * Тип StateSchemaKey описывает, какие поля есть в нашем корневом стейт.
 * */
export type StateSchemaKey = keyof StateSchema;

/**
 * Тип ReducersObject описывает, какому полю в корневом стейте соответствует какой редюсер.
 * */
export type ReducersObject = ReducersMapObject<StateSchema, Action>;
