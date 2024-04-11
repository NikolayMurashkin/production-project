import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DymanicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Page } from 'widgets/Page/Page';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { getArticleCommentsIsLoading } from '../model/selectros/comments';
import { addCommentForArticle } from '../model/services/addCommentForArticle';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import {
    getArticleComments,
} from '../model/slices/articleDetailsCommentsSlice';
import styles from './ArticleDetailsPage.module.scss';
import {
    getArticleRecommendations,
} from '../model/slices/articleDetailsPageRecommendationSlice';
import { getArticleRecommendationsIsLoading } from '../model/selectros/recommendations';
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../model/slices';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader/ArticleDetailsPageHeader';

const reducers: ReducersList = {
    articlesDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{ id: string }>();

    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );

    if (!id) {
        return <div>{t('Статья не найдена')}</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={styles.ArticleDetailsPage}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <Text
                    size={TextSize.L}
                    title={t('Рекоммендуем')}
                    className={styles.commentTitle}
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={styles.recommendations}
                    target="_blank"
                />
                <Text
                    size={TextSize.L}
                    title={t('Комментарии')}
                    className={styles.commentTitle}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
