import { memo, useCallback } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button, HStack } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from '../../model/selectros/article';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className } = props;

        const navigate = useNavigate();
        const { t } = useTranslation('main');

        const canEdit = useSelector(getCanEditArticle);
        const article = useSelector(getArticleDetailsData);

        const onBackToList = useCallback(() => {
            navigate(RoutePath.articles);
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            navigate(`${RoutePath.article_details}${article?.id}/edit`);
        }, [article, navigate]);

        return (
            <HStack max justify='between' className={cn(className)}>
                <Button onClick={onBackToList} theme={ButtonTheme.OUTLINE}>
                    {t('Назад к списку')}
                </Button>
                {canEdit && (
                    <Button onClick={onEditArticle} theme={ButtonTheme.OUTLINE}>
                        {t('Редактировать')}
                    </Button>
                )}
            </HStack>
        );
    }
);
