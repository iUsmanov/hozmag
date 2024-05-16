import { memo } from 'react';
import cls from './ProfileCard.module.scss';
import { Flex, HStack, VStack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/Input';
import { Profile } from '../../model/types/profile';
import classNames from 'classnames';

interface ProfileCardProps {
	className?: string;
	data?: Profile;
	isLoading?: boolean;
	error?: string;
	readonly?: boolean;
	onChangeFirstOrLastName?: (value: string, name?: string) => void;
	onChangeAddress?: (value: string) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
	const { className, isLoading, data, error, readonly, onChangeAddress, onChangeFirstOrLastName } =
		props;

	if (isLoading) {
		return (
			<HStack
				max
				justify='center'
				className={classNames(cls.profileCard, {}, [className, cls.loading])}
				data-testid='ProfileCard.IsLoading'
			>
				Loader...
			</HStack>
		);
	}

	if (error) {
		return (
			<Flex
				justify='center'
				align='center'
				max
				className={classNames(cls.profileCard, {}, [className, cls.error])}
			>
				<div>Произошла ошибка при загрузке</div>
				<div>Попробуйте обновить страницу</div>
			</Flex>
		);
	}

	return (
		<VStack
			gap={'16'}
			max
			className={classNames(cls.profileCard, { [cls.editing]: !readonly }, [className])}
		>
			<Input
				onChange={onChangeFirstOrLastName}
				readOnly={readonly}
				value={data?.first}
				placeholder={'Имя'}
				name='firstName'
			/>
			<Input
				onChange={onChangeFirstOrLastName}
				readOnly={readonly}
				value={data?.lastname}
				placeholder={'Фамилия'}
				name='lastName'
			/>
			<Input
				onChange={onChangeAddress}
				readOnly={readonly}
				value={data?.address}
				placeholder={'Адрес'}
			/>
		</VStack>
	);
});
