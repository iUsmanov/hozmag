import { CSSProperties, memo } from 'react';
import cls from './Skeleton.module.scss';
import classNames from 'classnames';

export interface SkeletonMatrixProps {
	className?: string;
	width: string | number;
	height: string | number;
	borderRadius?: string;
	style?: CSSProperties;
}

export const Skeleton = memo((props: SkeletonMatrixProps) => {
	const { className, borderRadius, height, width, style } = props;

	const styles: CSSProperties = {
		...style,
		width,
		height,
		borderRadius,
	};

	return <div style={styles} className={classNames(cls.skeleton, {}, [className])}></div>;
});
