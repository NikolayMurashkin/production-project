import { HTMLAttributeAnchorTarget, memo } from 'react';
import cn from 'classnames';
import { Text } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { TextSize } from 'shared/ui/Text/Text';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { Article, ArticleView } from '../../model/types/article';
import styles from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 10 : 3).fill(0).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticleListItemSkeleton
            className={styles.card}
            key={index}
            view={view}
        />
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

    if (!isLoading && !articles.length) {
        return (
            <div className={cn(className, styles[view])}>
                <Text title={t('Статьи не найдены')} size={TextSize.L} />
            </div>
        );
    }
    const isBig = view === ArticleView.BIG;
    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig
        ? articles.length
        : Math.ceil(articles.length / itemsPerRow);

    const rowRenderer = ({ index, key, style }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);
        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    view={view}
                    key={articles[i].id}
                    className={styles.card}
                    target={target}
                />
            );
        }

        return (
            <div key={key} style={style} className={styles.row}>
                {items}
            </div>
        );
    };

    return (
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                height,
                width,
                scrollTop,
                isScrolling,
                registerChild,
                onChildScroll,
            }) => (
                <div
                    className={cn(className, styles[view])}
                    ref={registerChild}
                >
                    <List
                        height={height ?? 700}
                        width={width ? width - 80 : 700}
                        rowCount={rowCount}
                        rowHeight={isBig ? 700 : 330}
                        rowRenderer={rowRenderer}
                        onScroll={onChildScroll}
                        scrollTop={scrollTop}
                        isScrolling={isScrolling}
                        autoHeight
                    />
                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
});
