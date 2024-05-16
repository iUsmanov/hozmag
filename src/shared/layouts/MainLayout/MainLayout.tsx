import { ReactElement } from 'react';
import cls from './MainLayout.module.scss';
import classNames from 'classnames';

interface MainLayoutProps {
	className?: string;
	header: ReactElement;
	sidebar: ReactElement;
	content: ReactElement;
	toolbar?: ReactElement;
}

export const MainLayout = (props: MainLayoutProps) => {
	const { className, content, header, sidebar, toolbar } = props;

	return (
		<div className={classNames(cls.mainLayout, {}, [className])}>
			<div className={cls.sidebar}>{sidebar}</div>
			<div className={cls.content}>{content}</div>
			<div className={cls.rightbar}>
				<div className={cls.header}>{header}</div>
				<div className={cls.toolbar}>{toolbar}</div>
			</div>
		</div>
	);
};
