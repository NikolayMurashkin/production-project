import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={() => setError(true)}
        >
            {t('Вызвать ошибку')}
        </Button>
    );
};
