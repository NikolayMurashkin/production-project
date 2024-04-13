import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    items: [
        { value: '123', content: 'asdasd' },
        { value: '1234', content: 'asdasd' },
        { value: '1234', content: 'asdasd', disabled: true },
    ],
    onChange: action('listBox'),
    defaultValue: 'Выберите значение',
};
