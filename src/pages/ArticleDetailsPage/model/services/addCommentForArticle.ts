import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article';
import { getUserAuthData } from 'entities/User';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
            getState,
            dispatch,
        } = thunkAPI;

        const userId = getUserAuthData(getState())?.id;
        const articleId = getArticleDetailsData(getState())?.id;

        if (!text || !userId || !articleId) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId,
                userId,
                text,
            });

            dispatch(fetchCommentsByArticleId(articleId));
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);
