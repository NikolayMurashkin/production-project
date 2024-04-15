import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize, VStack } from 'shared/ui';
import { ArticleList } from 'entities/Article';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            data: articles,
            isLoading,
            error,
        } = useArticleRecommendationsList(3);

        if (error || isLoading || !articles) {
            return null;
        }

        return (
            <VStack gap='8' className={cn(className)}>
                <Text size={TextSize.L} title={t('Рекоммендуем')} />
                <ArticleList articles={articles} target='_blank' />
            </VStack>
        );
    }
);
