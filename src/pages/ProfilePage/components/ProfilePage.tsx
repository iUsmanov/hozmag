import { memo } from 'react';
import { PageMainContent } from '@/widgets/PageMainContent';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

interface ProfilePageProps {
	className?: string;
}

export const ProfilePage = memo((props: ProfilePageProps) => {
	const { className } = props;
	const { id } = useParams<{ id: string }>();

	if (!id) {
		return <div>Профиль не найден</div>;
	}

	return (
		<PageMainContent className={classNames('', {}, [className])}>
			<EditableProfileCard id={id} />
		</PageMainContent>
	);
});
