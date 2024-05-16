import { FC, ReactElement } from 'react';
import cls from './StickyContentLayout.module.scss';
import classNames from 'classnames';

interface StickyContentLayoutProps {
	className?: string;
	left?: ReactElement;
	content: ReactElement;
	right?: ReactElement;
}

export const StickyContentLayout: FC<StickyContentLayoutProps> = (props) => {
	const { className, content, left, right } = props;

	return (
		<div className={classNames(cls.stickyContentLayout, {}, [className])}>
			{left && <div className={cls.left}>{left}</div>}
			<div className={cls.content}>{content}</div>
			{right && <div className={cls.right}>{right}</div>}
		</div>
	);
};
