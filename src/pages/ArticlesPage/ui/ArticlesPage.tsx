import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ArticlesPage.module.scss';

const ArticlesPage = () => {
    const { t } = useTranslation('articles');
    return (
        <div className={styles.articles}>{t('ArticlesPage')}</div>
    );
};

export default memo(ArticlesPage);
