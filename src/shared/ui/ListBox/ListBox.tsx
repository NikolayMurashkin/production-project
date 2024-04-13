import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cn from 'classnames';
import { DropdownDirection } from 'shared/types/ui';
import styles from './ListBox.module.scss';
import { Button } from '../Button/Button';
import { HStack } from '..';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    readonly?: boolean;
    label?: string;
    direction?: DropdownDirection;
    onChange: (value: string) => void;
}

export function ListBox(props: ListBoxProps) {
    const {
        items,
        className,
        value,
        defaultValue,
        readonly,
        label,
        direction = 'bottom-right',
        onChange,
    } = props;

    return (
        <HStack gap='8'>
            <HListBox
                as='div'
                className={cn(className, styles.ListBox)}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HStack gap='4'>
                    {label && (
                        <HListBox.Label aria-disabled={readonly}>
                            {`${label}>`}
                        </HListBox.Label>
                    )}
                    <HListBox.Button
                        aria-disabled={readonly}
                        className={styles.trigger}
                        as='div'
                    >
                        <Button disabled={readonly}>
                            {value ?? defaultValue}
                        </Button>
                    </HListBox.Button>
                    <HListBox.Options
                        className={cn(styles.options, styles[direction])}
                    >
                        {items?.map((item) => (
                            <HListBox.Option
                                key={item.value}
                                value={item.value}
                                disabled={item.disabled}
                                as={Fragment}
                            >
                                {({ active, selected, disabled }) => (
                                    <li
                                        className={cn(styles.item, {
                                            [styles.active]: active,
                                            [styles.selected]: selected,
                                            [styles.disabled]: disabled,
                                        })}
                                    >
                                        <HStack gap='4'>
                                            {selected && '> '}
                                            <span>{item.content}</span>
                                        </HStack>
                                    </li>
                                )}
                            </HListBox.Option>
                        ))}
                    </HListBox.Options>
                </HStack>
            </HListBox>
        </HStack>
    );
}
