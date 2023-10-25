import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import {
    renderWithTranslation,
} from '../../../../shared/lib/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('should render correctly', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('should toggle correctly', () => {
        renderWithTranslation(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleButton);
        expect(toggleButton).toHaveClass('collapsed');
    });
});
