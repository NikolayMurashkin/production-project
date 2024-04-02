import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Page } from './Page';

export default {
    title: 'Page/Page',
    component: Page,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.args = {};