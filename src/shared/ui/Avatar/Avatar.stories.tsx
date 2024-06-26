import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from '../Avatar/Avatar';
import AvatarImg from '../../assets/test/avatar.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: AvatarImg,
    alt: 'avatar',
    size: 150,
};
export const Small = Template.bind({});
Small.args = {
    src: AvatarImg,
    alt: 'avatar',
    size: 50,
};
