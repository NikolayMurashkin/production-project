import { memo, useCallback } from 'react';
import cn from 'classnames';
import {
    ArticlesSortSelector, ArticleView, ArticleViewSelector, ArticleSortField,
} from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Input } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { SortOrder } from 'shared/types';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import styles from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const {
        className,
    } = props;

    const view = useSelector(getArticlesPageView);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const sort = useSelector(getArticlesPageSort);

    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageActions.setOrder(order));
    }, [dispatch]);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(sort));
    }, [dispatch]);

    const onSearchChange = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
    }, [dispatch]);

    return (
        <div className={cn(className)}>
            <div className={styles['sort-wrapper']}>
                <ArticlesSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={styles.search}>
                <Input
                    value={search}
                    placeholder={t('Поиск')}
                    onChange={onSearchChange}
                />
            </Card>
        </div>
    );
});
