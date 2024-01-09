import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);
describe('loginByUsername', () => {
    // test('should return with fulfilled', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({
    //         data: userValue,
    //     }));
    //     const action = loginByUsername({
    //         username: 'Johnny',
    //         password: 'qwerty',
    //     });
    //     const result = await action(dispatch, getState, undefined);
    //
    //     expect(mockedAxios.post)
    //         .toHaveBeenCalled();
    //     expect(result.meta.requestStatus)
    //         .toBe('fulfilled');
    //     expect(dispatch)
    //         .toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     expect(dispatch)
    //         .toHaveBeenCalledTimes(3);
    //     expect(result.payload)
    //         .toEqual(userValue);
    // });
    //
    // test('should return with 403 status', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({
    //         status: 403,
    //     }));
    //     const action = loginByUsername({
    //         username: 'Johnny',
    //         password: 'qwerty',
    //     });
    //     const result = await action(dispatch, getState, undefined);
    //
    //     expect(mockedAxios.post)
    //         .toHaveBeenCalled();
    //     expect(result.meta.requestStatus)
    //         .toBe('rejected');
    //     expect(dispatch)
    //         .toHaveBeenCalledTimes(2);
    //     expect(result.payload)
    //         .toEqual('error');
    // });

    test('should return with fulfilled', async () => {
        const userValue = {
            username: 'John Wick',
            id: '1',
        };
        mockedAxios.post.mockReturnValue(Promise.resolve({
            data: userValue,
        }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({
            username: 'Johnny',
            password: 'qwerty',
        });

        expect(mockedAxios.post)
            .toHaveBeenCalled();
        expect(result.meta.requestStatus)
            .toBe('fulfilled');
        expect(thunk.dispatch)
            .toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch)
            .toHaveBeenCalledTimes(3);
        expect(result.payload)
            .toEqual(userValue);
    });

    test('should return with 403 status', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({
            status: 403,
        }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({
            username: 'Johnny',
            password: 'qwerty',
        });

        expect(mockedAxios.post)
            .toHaveBeenCalled();
        expect(result.meta.requestStatus)
            .toBe('rejected');
        expect(thunk.dispatch)
            .toHaveBeenCalledTimes(2);
        expect(result.payload)
            .toEqual('error');
    });
});
