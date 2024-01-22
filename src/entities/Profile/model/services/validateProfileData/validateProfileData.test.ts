import { Countries } from 'entities/Country';
import { Currencies } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'JoyBoy',
    first: 'Joy',
    lastname: 'Boy',
    age: 23,
    country: Countries.Russia,
    city: 'Moscow',
    currency: Currencies.RUB,
};

describe('validateProfileData', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without firstname', async () => {
        const result = validateProfileData({ ...data, first: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({ });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_CITY,
            ValidateProfileError.INCORRECT_COUNTRY,
            ValidateProfileError.INCORRECT_CURRENCY,
        ]);
    });
});
