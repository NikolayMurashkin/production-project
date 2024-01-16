import { t } from 'i18next';
import { memo, useCallback, useMemo } from 'react';
import { Select } from 'shared/ui';
import { Currencies } from '../model/types/currency';

interface CurrencyProps {
    readonly?: boolean;
    value?: Currencies;
    onChange?: (value: Currencies) => void;
    className?: string;
}

export const CurrencySelect = memo((props: CurrencyProps) => {
    const {
        readonly, value, className, onChange,
    } = props;

    const currencies = useMemo(
        () => Object.values(Currencies).map((currency) => ({ value: currency, content: currency })),
        [],
    );

    const handleOnChange = useCallback((value: string) => {
        onChange?.(value as Currencies);
    }, [onChange]);

    return (
        <Select
            label={t('Валюта')}
            options={currencies}
            readonly={readonly}
            onChange={handleOnChange}
            value={value}
            className={className}
        />
    );
});
