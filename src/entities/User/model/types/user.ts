export interface User {
	id: string;
	username: string;
	roles?: UserRole[];
}

export interface UserSchema {
	authData?: User;
	_inited?: boolean;
}

export type UserRole = 'ADMIN' | 'USER';
