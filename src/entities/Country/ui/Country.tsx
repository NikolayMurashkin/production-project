import { t } from 'i18next';
import { memo, useCallback, useMemo } from 'react';
import { Select } from 'shared/ui';
import { Countries } from '../model/types/country';

interface CountryProps {
    readonly?: boolean;
    value?: Countries;
    onChange?: (value: Countries) => void;
    className?: string;
}

export const CountrySelect = memo((props: CountryProps) => {
    const {
        readonly, value, className, onChange,
    } = props;

    const countries = useMemo(
        () => Object.values(Countries).map((country) => ({ value: country, content: country })),
        [],
    );

    const handleOnChange = useCallback((value: string) => {
        onChange?.(value as Countries);
    }, [onChange]);

    return (
        <Select
            label={t('Страна')}
            options={countries}
            readonly={readonly}
            onChange={handleOnChange}
            value={value}
            className={className}
        />
    );
});
