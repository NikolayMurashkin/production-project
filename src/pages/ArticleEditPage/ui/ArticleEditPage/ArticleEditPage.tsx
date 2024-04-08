import { memo } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import styles from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const {
        className,
    } = props;
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    const { t } = useTranslation();

    return (
        <Page className={cn(className, styles.ArticleEditPage)}>
            {isEdit ? t(`Редактирование статьи с ID = ${id}`) : t('Создание новой статьи')}
        </Page>
    );
});
export default ArticleEditPage;
