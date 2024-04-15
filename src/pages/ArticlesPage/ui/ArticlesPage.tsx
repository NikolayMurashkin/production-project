import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DymanicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage';
import { initArticlesPage } from '../model/services/initArticlesPage';
import { articlesPageReducer } from '../model/slices/articlesPageSlice';
import { ArticleInfiniteList } from './ArticleInfiniteList/ArticleInfiniteList';
import styles from './ArticlesPage.module.scss';
import { ArticlesPageFilters } from './ArticlesPageFilters/ArticlesPageFilters';

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={styles.articles} onScrollEnd={onLoadNextPart}>
                <ArticlesPageFilters />
                <ArticleInfiniteList className={styles.list} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
