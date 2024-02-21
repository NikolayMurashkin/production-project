import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { {{camelCase}} } from '../services/{{camelCase}}/{{camelCase}}';

const initialState: {{pascalCase}}Schema = {
    isLoading: false,
    data: undefined,
    error: undefined,
};

export const {{camelCase}}Slice = createSlice({
    name: '{{camelCase}}',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase({{camelCase}}.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase({{camelCase}}.fulfilled, (
                state,
                action: PayloadAction<Article>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase({{camelCase}}.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: {{camelCase}}Actions } = {{camelCase}}Slice;
export const { reducer: {{camelCase}}Reducer } = {{camelCase}}Slice;
