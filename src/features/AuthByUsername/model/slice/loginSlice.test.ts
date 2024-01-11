import {
    loginActions,
    loginByUsername,
    LoginSchema,
} from 'features/AuthByUsername';
import { loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('should set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '',
        };
        const setUsernameAction = loginActions.setUsername('John Wick');
        expect(loginReducer(state as LoginSchema, setUsernameAction))
            .toEqual({ username: 'John Wick' });
    });
    test('should set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '',
        };
        const setPasswordAction = loginActions.setPassword('qwerty');
        expect(loginReducer(state as LoginSchema, setPasswordAction))
            .toEqual({ password: 'qwerty' });
    });
    test('should clear error', () => {
        const state: DeepPartial<LoginSchema> = {
            error: 'error',
        };
        const clearErrorAction = loginActions.clearError();
        expect(loginReducer(state as LoginSchema, clearErrorAction))
            .toEqual({ error: '' });
    });
    test('should set isLoading', () => {
        const state: DeepPartial<LoginSchema> = {
            isLoading: false,
        };
        expect(loginReducer(state as LoginSchema, loginByUsername.pending))
            .toEqual({
                error: undefined,
                isLoading: true,
            });
    });
});
