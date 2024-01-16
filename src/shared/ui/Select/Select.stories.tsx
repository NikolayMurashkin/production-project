import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from 'shared/ui/Select/Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'test label',
    options: [
        {
            value: '123',
            content: 'Первый пункт',
        },
        {
            value: '123',
            content: 'Второй пункт',
        },
    ],
    value: '123',
    // eslint-disable-next-line no-alert
    onChange: (value: string) => { alert(value); },
    readonly: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'test label',
    options: [
        {
            value: '123',
            content: '123456',
        },
        {
            value: '123',
            content: '123456',
        },
    ],
    value: '123',
    // eslint-disable-next-line no-alert
    onChange: (value: string) => { alert(value); },
    readonly: true,
};
