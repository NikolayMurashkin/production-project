import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cn from 'classnames';
import { AppLink, Text } from 'shared/ui';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { TextTheme } from 'shared/ui/Text/Text';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const authData = useSelector(getUserAuthData);
    if (authData) {
        return (
            <header className={cn(styles.Navbar, className)}>
                <Text
                    className={styles['app-name']}
                    title={t('Nikolay Murashkin App')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.article_create}
                >
                    {t('Создать статью')}
                </AppLink>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={styles.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </header>
        );
    }
    return (
        <header className={cn(styles.Navbar, className)}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={styles.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );
});
