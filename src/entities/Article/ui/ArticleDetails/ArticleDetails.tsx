import cn from 'classnames';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DymanicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Avatar, Skeleton, Text } from 'shared/ui';
import { TextAlign, TextSize } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import styles from './ArticleDetails.module.scss';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlockComponent } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlockComponent } from '../ArticleTextBlock/ArticleTextBlock';

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { id, className } = props;
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={styles.block}
                />
            );

        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={styles.block}
                />
            );

        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    block={block}
                    className={styles.block}
                />
            );
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={styles.avatar} width={200} height={200} border="50%" />
                <Skeleton className={styles.title} width={300} height={32} />
                <Skeleton className={styles.skeleton} width={600} height={24} />
                <Skeleton className={styles.skeleton} width="100%" height={200} />
                <Skeleton className={styles.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                title={t('Произошла ошибка при загрузке статьи')}
                align={TextAlign.CENTER}
            />
        );
    } else {
        content = (
            <>
                <div className={styles.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={styles.avatar}
                    />
                </div>
                <Text
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                    className={styles.title}
                />
                <div className={styles.articleInfo}>
                    <Icon Svg={EyeIcon} className={styles.icon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={styles.articleInfo}>
                    <Icon Svg={CalendarIcon} className={styles.icon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={cn(className, styles.ArticleDetails)}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
