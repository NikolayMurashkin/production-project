import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList';
import { fetchNextArticlesPage } from '../fetchNextArticlesPage';

jest.mock('../fetchArticlesList');

describe('fetchNextArticlesPage', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({});
    });
    test('fetchArticlesList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
    test('fetchArticlesList not called when isLoading true', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                hasMore: false,
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
