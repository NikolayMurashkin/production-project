import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    test('should return username value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: 'John Wick' },
        };
        expect(getLoginUsername(state as StateSchema))
            .toEqual('John Wick');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema))
            .toEqual('');
    });
});
