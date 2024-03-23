import { Countries } from 'entities/Country';
import { Currencies } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

const data = {
    username: 'Joy',
    lastname: 'Boy',
    age: 23,
    country: Countries.Russia,
    city: 'Moscow',
    currency: Currencies.RUB,
};

describe('fetchProfileData', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({
            data,
        }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({
            status: 403,
        }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get)
            .toHaveBeenCalled();
        expect(result.meta.requestStatus)
            .toBe('rejected');
        expect(thunk.dispatch)
            .toHaveBeenCalledTimes(2);
        expect(result.payload)
            .toEqual('error');
    });
});
