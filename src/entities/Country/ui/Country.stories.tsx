import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Countries, CountrySelect } from '..';

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value: Countries.Armenia,
    // eslint-disable-next-line no-alert
    onChange: (value: string) => { alert(value); },
    readonly: false,
};
