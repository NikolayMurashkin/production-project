import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 200 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    items: [
        { value: '123', content: 'qweqweqwe qweqwe' },
        { value: '1234', content: 'asdasd asdasd' },
        { value: '1234', content: 'asasdasddasd', disabled: true },
    ],
    onChange: action('listBox'),
    value: 'value',
    direction: 'bottom-left',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    items: [
        { value: '123', content: 'qweqweqwe qweqwe' },
        { value: '1234', content: 'asdasd asdasd' },
        { value: '1234', content: 'asasdasddasd', disabled: true },
    ],
    onChange: action('listBox'),
    value: 'value',
    direction: 'bottom-right',
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    items: [
        { value: '123', content: 'qweqweqwe qweqwe' },
        { value: '1234', content: 'asdasd asdasd' },
        { value: '1234', content: 'asasdasddasd', disabled: true },
    ],
    onChange: action('listBox'),
    value: 'value',
    direction: 'top-left',
};

export const TopRight = Template.bind({});
TopRight.args = {
    items: [
        { value: '123', content: 'qweqweqwe qweqwe' },
        { value: '1234', content: 'asdasd asdasd' },
        { value: '1234', content: 'asasdasddasd', disabled: true },
    ],
    onChange: action('listBox'),
    value: 'value',
    direction: 'top-right',
};
