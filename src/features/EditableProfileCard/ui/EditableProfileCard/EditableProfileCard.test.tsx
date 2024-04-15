import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Countries } from 'entities/Country';
import { Currencies } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { $api } from 'shared/api/api';
import { ComponentRender } from 'shared/lib/tests/componentRender/componentRender';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 22,
    currency: Currencies.USD,
    country: Countries.Kazakhstan,
    city: 'Moscow',
    username: 'admin123',
};

const options = {
    initialState: {
        profile: {
            form: profile,
            data: profile,
            readonly: true,
        },
        user: { authData: { id: '1' } },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditableProfileCard', () => {
    test('should change readonly regime', async () => {
        ComponentRender(<EditableProfileCard id='1' />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        );
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelButton')
        ).toBeInTheDocument();
    });
    test('should return previous values when click cancel button', async () => {
        ComponentRender(<EditableProfileCard id='1' />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));
        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'first'
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.lastname'),
            'last'
        );
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(
            'first'
        );
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('last');

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelButton')
        );
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(
            'admin'
        );
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
    });
    test('should render error', async () => {
        ComponentRender(<EditableProfileCard id='1' />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton')
        );
        expect(
            screen.getByTestId('EditableProfileCard.Error')
        ).toBeInTheDocument();
    });
    test('should send PUT request to the server if there is no errors', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        ComponentRender(<EditableProfileCard id='1' />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        );

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user'
        );

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton')
        );

        expect(mockPutReq).toHaveBeenCalled();
    });
});
