import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
    test('should increment', () => {
        const state: CounterSchema = {
            value: 10,
        };

        const increment = counterActions.increment();
        expect(counterReducer(state, increment)).toEqual({ value: 11 });
    });

    test('should decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };

        const decrement = counterActions.decrement();
        expect(counterReducer(state, decrement)).toEqual({ value: 9 });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
