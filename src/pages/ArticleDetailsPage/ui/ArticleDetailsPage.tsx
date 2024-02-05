import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage = () => {
    const { t } = useTranslation('articles');
    return (
        <div className={styles.articles}>{t('ArticleDetailsPage')}</div>
    );
};

export default memo(ArticleDetailsPage);
