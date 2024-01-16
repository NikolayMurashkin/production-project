import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currencies, CurrencySelect } from '..';

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value: Currencies.EUR,
    // eslint-disable-next-line no-alert
    onChange: (value: string) => { alert(value); },
    readonly: false,
};
