import { memo, useMemo } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui';
import { SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';
import styles from './ArticlesSortSelector.module.scss';

interface ArticlesSortSelectorProps {
    className?: string;
    sort?: ArticleSortField;
    order?: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticlesSortSelector = memo((props: ArticlesSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    } = props;

    const { t } = useTranslation('articles');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            content: t('возрастанию'),
            value: 'asc',
        },
        {
            content: t('убыванию'),
            value: 'desc',
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            content: t('Дате создания'),
            value: ArticleSortField.CREATED,
        },
        {
            content: t('Названию'),
            value: ArticleSortField.TITLE,
        },
        {
            content: t('Количеству просмотров'),
            value: ArticleSortField.VIEWS,
        },
    ], [t]);

    return (
        <div className={cn(className, styles.ArticlesSortSelector)}>
            <Select<ArticleSortField>
                label={t('Сортировать по')}
                options={sortFieldOptions}
                onChange={onChangeSort}
                value={sort}
            />
            <Select<SortOrder>
                label={t('по')}
                options={orderOptions}
                onChange={onChangeOrder}
                value={order}
            />

        </div>
    );
});
