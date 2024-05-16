import { rtkApi } from '@/shared/api/rtkApi';
import { User } from '../types/user';
import { UserSettings } from '../types/userSettings';

interface SetUserSettingsArg {
	userId: string;
	userSettings: UserSettings;
}

const userApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getUserDataById: build.query<User, string>({
			query: (userId) => ({
				url: `/users/${userId}`,
				method: 'GET',
			}),
		}),
	}),
});

export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;
