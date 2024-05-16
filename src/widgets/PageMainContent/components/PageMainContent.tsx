import { MutableRefObject, ReactNode, useRef } from 'react';
import cls from './PageMainContent.module.scss';
import classNames from 'classnames';

interface PageProps {
	className?: string;
	children: ReactNode;
}

export const PageMainContent = (props: PageProps) => {
	const { className, children } = props;
	const parentRef = useRef() as MutableRefObject<HTMLDivElement>;
	// useScrolling(parentRef);

	return <main className={classNames(cls.page, {}, [className])}>{children}</main>;
};
