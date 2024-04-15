import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets';
import styles from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page className={cn(styles.AdminPanelPage, className)}>
            {t('ADMIN PANEL')}
        </Page>
    );
});

export default AdminPanelPage;
