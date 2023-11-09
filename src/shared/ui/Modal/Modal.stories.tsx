import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
    ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolore ducimus est excepturi fuga impedit nisi non optio perspiciatis provident, qui vitae. Dolorem nesciunt, quod? Amet eos minus natus quas.',
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolore ducimus est excepturi fuga impedit nisi non optio perspiciatis provident, qui vitae. Dolorem nesciunt, quod? Amet eos minus natus quas.',
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
