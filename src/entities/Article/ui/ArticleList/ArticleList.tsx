import { memo } from 'react';
import cn from 'classnames';
import { Article, ArticleView } from '../../model/types/article';
import styles from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
    } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
            className={styles.card}
            isLoading={isLoading}
        />
    );

    return (
        <div className={cn(className, styles.view)}>
            {articles.length > 0 ? articles.map((article) => (
                renderArticle(article)
            )) : null}
        </div>
    );
});
