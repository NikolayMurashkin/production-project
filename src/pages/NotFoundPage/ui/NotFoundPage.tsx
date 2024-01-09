import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cn from 'classnames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={cn(cls.NotFoundPage, className)}>
            {t('Страница не найдена')}
        </div>
    );
});
