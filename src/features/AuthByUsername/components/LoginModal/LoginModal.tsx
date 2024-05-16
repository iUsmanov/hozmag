import { Suspense, memo } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import classNames from 'classnames';

interface LoginModalProps {
	className?: string;
	isOpened?: boolean;
	isMounted?: boolean;
	onModalClose?: () => void;
}

export const LoginModal = memo((props: LoginModalProps) => {
	const { className, isOpened, isMounted, onModalClose } = props;

	return (
		<Modal
			className={classNames('', {}, [className])}
			container={document.body}
			isOpened={isOpened}
			isMounted={isMounted}
			onModalClose={onModalClose}
		>
			<Suspense fallback={'Loader...'}>
				<LoginFormAsync isOpened={isOpened} onModalClose={onModalClose} />
			</Suspense>
		</Modal>
	);
});
