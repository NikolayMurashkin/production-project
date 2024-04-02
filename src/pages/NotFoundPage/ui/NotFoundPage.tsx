import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cn from 'classnames';
import { Page } from 'shared/ui/Page/Page';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <Page className={cn(styles.NotFoundPage, className)}>
            {t('Страница не найдена')}
        </Page>
    );
});
