import { ReactNode, memo } from 'react';
import cls from './AppLink.module.scss';

import { LinkProps, NavLink } from 'react-router-dom';
import classNames from 'classnames';

export type AppLinkVariant = 'primary' | 'red' | 'outline';

export interface AppLinkBeautyProps extends LinkProps {
	className?: string;
	variant?: AppLinkVariant;
	children: ReactNode;
	activeClassName?: string;
}

export const AppLink = memo((props: AppLinkBeautyProps) => {
	const { variant = 'primary', className, children, activeClassName = '', ...otherProps } = props;

	return (
		<NavLink
			{...otherProps}
			className={({ isActive }) =>
				classNames(cls.appLink, { [activeClassName]: isActive }, [className, cls[variant]])
			}
		>
			{children}
		</NavLink>
	);
});
