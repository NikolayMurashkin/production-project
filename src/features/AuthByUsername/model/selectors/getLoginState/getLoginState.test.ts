import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
    test('should return username value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'John Wick',
                password: 'qwerty',
                isLoading: true,
                error: 'error',
            },
        };
        expect(getLoginState(state as StateSchema))
            .toEqual({
                username: 'John Wick',
                password: 'qwerty',
                isLoading: true,
                error: 'error',
            });
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema))
            .toEqual(undefined);
    });
});
