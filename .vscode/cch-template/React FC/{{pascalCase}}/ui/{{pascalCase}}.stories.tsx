import { ComponentMeta, ComponentStory } from '@storybook/react';
import { {{pascalCase}} } from './{{pascalCase}}';

export default {
    title: '{{pascalCase}}/{{pascalCase}}',
    component: {{pascalCase}},
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof {{pascalCase}}>;

const Template: ComponentStory<typeof {{pascalCase}}> = (args) => <{{pascalCase}} {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
