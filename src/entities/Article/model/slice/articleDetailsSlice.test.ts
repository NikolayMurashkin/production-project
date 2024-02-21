import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';

const data = {
    id: '1',
    title: 'title',
};

describe('profileSlice', () => {
    test('should set isLoading', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
        };
        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending('requestId', 'arg1')))
            .toEqual({ data: undefined, isLoading: true, error: undefined });
    });
    test('should set data', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
        };
        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.fulfilled(data as Article, 'requestId', 'arg1')))
            .toEqual({ data, isLoading: false, error: undefined });
    });
});
