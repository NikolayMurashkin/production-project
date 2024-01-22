import { StateSchema } from 'app/providers/StoreProvider';
import { Countries } from 'entities/Country';
import { Currencies } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('should return profile form data', () => {
        const form = {
            username: 'Joy',
            lastname: 'Boy',
            age: 23,
            country: Countries.Russia,
            city: 'Moscow',
            currency: Currencies.RUB,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema))
            .toEqual(form);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema))
            .toEqual(undefined);
    });
});
