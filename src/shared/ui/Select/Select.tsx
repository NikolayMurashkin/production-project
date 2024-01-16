import cn from 'classnames';
import { memo, useMemo, ChangeEvent } from 'react';
import styles from './Select.module.scss';

interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label: string;
    options: SelectOption[];
    readonly?: boolean;
    onChange?: (value: string) => void;
    value?: string;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        readonly,
        onChange,
        value,
    } = props;

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionsList = useMemo(() => options?.map(({ value, content }) => (
        <option
            key={value}
            value={value}
            className={styles.option}
        >
            {content}
        </option>
    )), [options]);
    return (
        <div className={cn(styles.wrapper, className, {
            [styles.disabled]: readonly,

        })}
        >
            {label && (
                <span className={styles.label}>
                    {`${label}>`}
                </span>
            )}
            <select className={styles.select} disabled={readonly} onChange={handleChange} value={value}>
                {optionsList}
            </select>
        </div>
    );
});
