import { CounterSchema } from 'entities/Counter';
import { LoginSchema } from 'features/AuthByUsername';
import { UserSchema } from 'entities/User';
import {
    AnyAction,
    CombinedState,
    EnhancedStore, Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    profile: ProfileSchema;

    // Async reducers
    loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
