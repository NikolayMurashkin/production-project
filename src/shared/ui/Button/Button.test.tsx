/* eslint-disable i18next/no-literal-string */
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('should render button text', () => {
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    }); test('should render theme class', () => {
        render(<Button theme={ThemeButton.CLEAR}>test</Button>);
        expect(screen.getByText('test')).toHaveClass('clear');
    });
});
