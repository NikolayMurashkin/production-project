import { StateSchema } from 'app/providers/StoreProvider';

export const get{{pascalCase}}Data = (state: StateSchema) => state.{{camelCase}}?.data;
export const get{{pascalCase}}IsLoading = (state: StateSchema) => state.{{camelCase}}?.isLoading;
export const get{{pascalCase}}Error = (state: StateSchema) => state.{{camelCase}}?.error;
