import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { initAuthData } from '../services/initAuthData/initAuthData';

export const initialState: UserSchema = {
	_inited: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload;
		},
		// initAuthData: (state) => {
		// 	const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
		// 	if (user) {
		// 		const userJson = JSON.parse(user) as User;
		// 		state.authData = userJson;
		// 		setFeatureFlags(userJson.features);
		// 	}
		// 	state._inited = true;
		// },
		logout: (state) => {
			state.authData = undefined;
			window.location.reload();
			// localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
		},
	},
	extraReducers(builder) {
		builder.addCase(initAuthData.fulfilled, (state, action: PayloadAction<User>) => {
			state._inited = true;
			state.authData = action.payload;
		});
		builder.addCase(initAuthData.rejected, (state) => {
			state._inited = true;
		});
	},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
