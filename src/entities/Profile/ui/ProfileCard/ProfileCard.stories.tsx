import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Countries } from 'entities/Country';
import { Currencies } from 'entities/Currency';
import AvatarImg from 'shared/assets/test/avatar.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'Joy',
        lastname: 'Boy',
        age: 23,
        country: Countries.Russia,
        city: 'Moscow',
        currency: Currencies.RUB,
        avatar: AvatarImg,
    },
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'Some error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
