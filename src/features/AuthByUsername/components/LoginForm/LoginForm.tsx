import { memo, useCallback } from 'react';
import cls from './LoginForm.module.scss';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { ReducersList, useDynamicModule } from '@/shared/lib/hooks/useDynamicModule/useDynamicModule';
import classNames from 'classnames';

export interface LoginFormProps {
	className?: string;
	isOpened?: boolean;
	onModalClose?: () => void;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
};

export const LoginForm = memo((props: LoginFormProps) => {
	const { className, isOpened, onModalClose } = props;
	const dispatch = useAppDispatch();
	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);
	const isLoading = useSelector(getLoginIsLoading);
	const error = useSelector(getLoginError);

	useDynamicModule({ reducers: initialReducers });

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value));
		},
		[dispatch]
	);

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value));
		},
		[dispatch]
	);

	const onLoginClick = useCallback(async () => {
		const action = await dispatch(loginByUsername({ username, password }));
		if (action.meta.requestStatus === 'fulfilled') {
			onModalClose?.();
		}
	}, [dispatch, onModalClose, password, username]);

	return (
		<div className={classNames(cls.loginForm, {}, [className])}>
			<div className={cls.title}>Форма авторизации</div>
			{error && <div>Вы ввели неверный логин или пароль</div>}
			<Input
				className={cls.input}
				placeholder={'Введите username'}
				onChange={onChangeUsername}
				value={username}
				autoFocus={isOpened}
			/>
			<Input
				className={cls.input}
				placeholder={'Введите пароль'}
				onChange={onChangePassword}
				value={password}
			/>
			<Button disabled={isLoading} onClick={onLoginClick} className={cls.loginBtn} variant='outline'>
				{'Войти'}
			</Button>
		</div>
	);
});
