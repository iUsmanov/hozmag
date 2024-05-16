import { memo } from 'react';
import cls from './PageError.module.scss';
import { VStack } from '@/shared/ui/Stack';
import classNames from 'classnames';

interface PageErrorProps {
	className?: string;
}

export const PageError = memo((props: PageErrorProps) => {
	const { className } = props;

	const reload = () => {
		window.location.reload();
	};

	return (
		<VStack
			data-testid='PageError'
			justify='center'
			align='center'
			className={classNames(cls.pageError, {}, [className])}
		>
			<h1>Произошла непредвиденная ошибка</h1>
			<button type='button' onClick={reload}>
				Обновить страницу
			</button>
		</VStack>
	);
});
