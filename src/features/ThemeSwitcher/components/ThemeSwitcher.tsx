// #theme
import { memo, useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

export interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
	const { className } = props;
	const { changeTheme } = useTheme();
	const dispatch = useAppDispatch();

	const onChangeTheme = useCallback(() => {
		changeTheme((newTheme) => {
			// dispatch(saveUserSettings({ theme: newTheme }));
		});
	}, [changeTheme]);

	return (
		// <Icon
		// 	Svg={ThemeIcon}
		// 	clickable
		// 	onClick={onChangeTheme}
		// 	className={className}
		// />
		<div onClick={onChangeTheme} className={className}>
			Сменить тему
		</div>
	);
});
