import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { Comment } from 'entities/Comment';

export interface ArticleDetailsRecommendationsSchema extends EntityState<Article>{
    isLoading: boolean;
    error?: string;
    data?: Article;
}

export interface ArticleDetailsCommentsSchema extends EntityState<Comment>{
    isLoading?: boolean;
    error?: string;
}

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsRecommendationsSchema;
}
