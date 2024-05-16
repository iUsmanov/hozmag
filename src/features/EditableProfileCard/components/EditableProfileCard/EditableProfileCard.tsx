import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { ReducersList, useDynamicModule } from '@/shared/lib/hooks/useDynamicModule/useDynamicModule';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { ProfileCard } from '@/entities/Profile';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import classNames from 'classnames';

interface EditableProfileCardProps {
	className?: string;
	id: string;
}

const initialReducers: ReducersList = {
	profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
	const { className, id } = props;
	const dispatch = useAppDispatch();
	const formData = useSelector(getProfileFormData);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadonly);
	const profileValidateErrors = useSelector(getProfileValidateErrors);

	useDynamicModule({ reducers: initialReducers });

	useInitialEffect(() => {
		if (id) {
			dispatch(fetchProfileData(id));
		}
	});

	const onChangeFirstOrLastName = useCallback(
		(value: string, name?: string) => {
			switch (name) {
				case 'firstName':
					dispatch(profileActions.setFormData({ first: value }));
					break;
				case 'lastName':
					dispatch(profileActions.setFormData({ lastname: value }));
					break;
				default:
					return;
			}
		},
		[dispatch]
	);

	const onChangeAddress = useCallback(
		(value: string) => {
			dispatch(profileActions.setFormData({ address: value }));
		},
		[dispatch]
	);

	return (
		<VStack
			max
			gap='16'
			className={classNames('', {}, [className])}
			data-testid='EditableProfileCard'
		>
			<EditableProfileCardHeader readonly={readonly} profileValidateErrors={profileValidateErrors} />
			<ProfileCard
				data={formData}
				isLoading={isLoading}
				error={error}
				readonly={readonly}
				onChangeFirstOrLastName={onChangeFirstOrLastName}
				onChangeAddress={onChangeAddress}
			/>
		</VStack>
	);
});
