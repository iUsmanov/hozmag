import { memo } from 'react';
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema';
import { useEditableProfileCardHeader } from '../../lib/hooks/useEditableProfileCardHeader';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import classNames from 'classnames';

interface EditableProfileCardHeaderProps {
	className?: string;
	readonly?: boolean;
	profileValidateErrors?: ValidateProfileError[];
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
	const { className, readonly, profileValidateErrors } = props;
	const { canEdit, onCancelEdit, onEdit, onEditSave } = useEditableProfileCardHeader();

	return (
		<>
			<HStack
				className={classNames('', {}, [className])}
				max
				justify='between'
				align='center'
				data-testid='EditableProfileCardHeader'
			>
				<div>Профиль</div>
				{canEdit && (
					<>
						{readonly ? (
							<Button
								onClick={onEdit}
								variant={'outline'}
								data-testid='EditableProfileCardHeader.EditButton'
							>
								Редактировать
							</Button>
						) : (
							<HStack gap='8'>
								<Button
									onClick={onCancelEdit}
									data-testid='EditableProfileCardHeader.CancelButton'
								>
									Отменить
								</Button>
								<Button
									onClick={onEditSave}
									variant={'outline'}
									data-testid='EditableProfileCardHeader.SaveButton'
								>
									Сохранить
								</Button>
							</HStack>
						)}
					</>
				)}
			</HStack>
			<div>
				{profileValidateErrors?.length &&
					profileValidateErrors?.map((err) => <div key={err}>{err}</div>)}
			</div>
		</>
	);
});
