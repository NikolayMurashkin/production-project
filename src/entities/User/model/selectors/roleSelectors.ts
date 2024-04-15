import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { UserRole } from '../types/user';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRoles, (state) => Boolean(state?.includes(UserRole.ADMIN)));
export const isUserManager = createSelector(getUserRoles, (state) => Boolean(state?.includes(UserRole.MANAGER)));
