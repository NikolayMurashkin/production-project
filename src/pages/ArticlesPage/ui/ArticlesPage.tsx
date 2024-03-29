import { ArticleList } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ArticlesPage.module.scss';

const ArticlesPage = () => {
    const { t } = useTranslation('articles');
    return (
        <div className={styles.articles}>
            <ArticleList articles={articles} />
        </div>
    );
};

export default memo(ArticlesPage);
