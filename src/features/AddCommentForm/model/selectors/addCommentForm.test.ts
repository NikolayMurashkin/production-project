import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommentFormError, getAddCommentFormText } from './addCommentForm';

describe('addCommentForm', () => {
    test('should return error value', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: { error: 'error' },
        };
        expect(getAddCommentFormError(state as StateSchema))
            .toEqual('error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema))
            .toEqual('');
    });
    test('should return comment state', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: { text: 'text' },
        };
        expect(getAddCommentFormText(state as StateSchema))
            .toEqual('text');
    });
});
