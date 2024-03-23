import { AddCommentFormSchema } from '../types/addCommentForm';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('addCommentFormSlice', () => {
    test('should set test', () => {
        const state: DeepPartial<AddCommentFormSchema> = {
            text: '',
        };
        const setUsernameAction = addCommentFormActions.setText('Hello world');
        expect(addCommentFormReducer(state as AddCommentFormSchema, setUsernameAction))
            .toEqual({ text: 'Hello world' });
    });
});
