import { useEffect } from 'react';

export function useInitialEffect(callback: VoidFunction) {
	useEffect(() => {
		callback();
		// eslint-disable-next-line
	}, []);
}
