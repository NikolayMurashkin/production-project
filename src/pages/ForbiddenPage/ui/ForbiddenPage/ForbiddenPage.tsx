import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets';
import styles from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
    className?: string;
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page className={cn(styles.ForbiddenPage, className)}>
            {t('У вас нет доступа к этой странице')}
        </Page>
    );
});
export default ForbiddenPage;
