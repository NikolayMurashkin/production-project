import { fireEvent, screen } from '@testing-library/react';
import {
    ComponentRender,
} from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('with only first param', () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('should increment', () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });

        fireEvent.click(screen.getByTestId('increment-button'));

        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('should decrement', () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });

        fireEvent.click(screen.getByTestId('decrement-button'));

        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
