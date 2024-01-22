import { Countries } from 'entities/Country';
import { Currencies } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const form = {
    username: 'Narkomanos',
    age: 23,
    country: Countries.NewZeeland,
    city: 'Oakland',
    currency: Currencies.EUR,
    lastname: 'Murashkin',
    first: 'Nikolay',
};
const data = {
    username: 'Joy',
    lastname: 'Boy',
    age: 23,
    country: Countries.Russia,
    city: 'Moscow',
    currency: Currencies.RUB,
};

describe('profileSlice', () => {
    test('should set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: true,
        };
        const setReadonlyAction = profileActions.setReadOnly(false);
        expect(profileReducer(state as ProfileSchema, setReadonlyAction))
            .toEqual({ readonly: false });
    });
    test('should update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form,
        };
        const updateProfileAction = profileActions.updateProfile(form);
        expect(profileReducer(state as ProfileSchema, updateProfileAction))
            .toEqual({ form });
    });
    test('should cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            form,
            data,
        };
        const onCancelAction = profileActions.onCancel();
        expect(profileReducer(state as ProfileSchema, onCancelAction))
            .toEqual({
                data, form: data, readonly: true, validateErrors: undefined,
            });
    });
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.INCORRECT_AGE],
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
            .toEqual({
                validateErrors: undefined,
                isLoading: true,
            });
    });
    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form,
            isLoading: false,
            validateErrors: undefined,
            readonly: false,
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled({ age: 34, first: 'Nika' }, '')))
            .toEqual({
                validateErrors: undefined,
                isLoading: false,
                readonly: true,
                form: { age: 34, first: 'Nika' },
                data: { age: 34, first: 'Nika' },
            });
    });
});
