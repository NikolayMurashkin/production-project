import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '..';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
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
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    trigger: <Button>open!~</Button>,
    items: [
        { content: 'firstfirstfirstfirst' },
        { content: 'second', disabled: true },
    ],
    direction: 'bottom-left',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    trigger: <Button>open!~</Button>,
    items: [
        { content: 'firstfirstfirstfirst' },
        { content: 'second', disabled: true },
    ],
    direction: 'bottom-right',
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    trigger: <Button>open!~</Button>,
    items: [
        { content: 'firstfirstfirstfirst' },
        { content: 'second', disabled: true },
    ],
    direction: 'top-left',
};

export const TopRight = Template.bind({});
TopRight.args = {
    trigger: <Button>open!~</Button>,
    items: [
        { content: 'firstfirstfirstfirst' },
        { content: 'second', disabled: true },
    ],
    direction: 'top-right',
};
