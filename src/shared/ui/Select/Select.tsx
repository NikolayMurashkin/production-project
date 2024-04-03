import cn from 'classnames';
import { useMemo, ChangeEvent } from 'react';
import styles from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label: string;
    options?: SelectOption<T>[];
    readonly?: boolean;
    onChange?: (value: T) => void;
    value?: T;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        readonly,
        onChange,
        value,
    } = props;

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
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
};
