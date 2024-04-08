import { memo, useCallback } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import styles from './ArticleDetailsPageHeader.module.scss';
import { getCanEditArticle } from '../../model/selectros/article';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const {
        className,
    } = props;

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
        <div className={cn(className, styles.ArticleDetailsPageHeader)}>
            <Button
                onClick={onBackToList}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button
                    onClick={onEditArticle}
                    theme={ButtonTheme.OUTLINE}
                    className={styles['edit-button']}
                >
                    {t('Редактировать')}
                </Button>
            )}

        </div>
    );
});
