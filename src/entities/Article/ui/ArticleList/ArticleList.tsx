import { HTMLAttributeAnchorTarget, memo } from 'react';
import cn from 'classnames';
import { Text } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { TextSize } from 'shared/ui/Text/Text';
import { Article, ArticleView } from '../../model/types/article';
import styles from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 10 : 3)
    .fill(0)
    .map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticleListItemSkeleton className={styles.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props;
    const { t } = useTranslation('articles');

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
            className={styles.card}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={cn(className, styles[view])}>
                <Text title={t('Статьи не найдены')} size={TextSize.L} />
            </div>
        );
    }

    return (
        <div className={cn(className, styles[view])}>
            {articles.length > 0
                ? articles.map((article) => renderArticle(article))
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
