import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleById } from './fetchArticleById';

const data = {
    id: '1',
    title: 'title',
};

describe('fetchArticleById', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({
            data,
        }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
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
