import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
    ThemeDecorator
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Error = Template.bind({});
Error.args = {
    title: 'Some great Title',
    text: 'Some awesome text',
    theme: TextTheme.ERROR,
};

export const Primary = Template.bind({});
Primary.args = {
    title: 'Some great Title',
    text: 'Some awesome text',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Some great Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Some awesome text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Some great Title',
    text: 'Some awesome text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Some great Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Some awesome text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Some great Title',
    text: 'Some awesome text',
    size: TextSize.L,
};
