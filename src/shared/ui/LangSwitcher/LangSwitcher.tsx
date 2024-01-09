import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch } from 'react-redux';
import { loginActions } from 'features/AuthByUsername';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const dispatch = useDispatch();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
        dispatch(loginActions.clearError());
    };

    return (
        <Button
            className={className}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
});
