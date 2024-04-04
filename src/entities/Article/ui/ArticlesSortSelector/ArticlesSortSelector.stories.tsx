import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesSortSelector } from './ArticlesSortSelector';

export default {
    title: 'entities/Article/ArticlesSortSelector',
    component: ArticlesSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesSortSelector>;

const Template: ComponentStory<typeof ArticlesSortSelector> = (args) => <ArticlesSortSelector {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
