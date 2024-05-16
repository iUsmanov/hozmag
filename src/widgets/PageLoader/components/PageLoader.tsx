import { memo } from 'react';
import cls from './PageLoader.module.scss';
import { HStack } from '@/shared/ui/Stack';
import classNames from 'classnames';

export const PageLoader = memo(() => {
	return (
		<HStack
			justify='center'
			align='center'
			className={classNames(cls.pageLoader)}
			data-testid='PageLoader'
		>
			<div>Loader...</div>
		</HStack>
	);
});
