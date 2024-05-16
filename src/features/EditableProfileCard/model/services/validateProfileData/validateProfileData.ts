import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

export const validateProfileErrors = (profile?: Profile) => {
	const errors: ValidateProfileError[] = [];

	if (!profile) {
		errors.push('noData');
		return errors;
	}

	const { first, address, lastname, username } = profile;

	if (!first && !address && !lastname && !username) {
		errors.push('noData');
		return errors;
	}
	if (!first) {
		errors.push('incorrectFirstName');
	}

	if (!lastname) {
		errors.push('incorrectLastName');
	}

	if (!address) {
		errors.push('incorrectAddress');
	}

	return errors;
};
