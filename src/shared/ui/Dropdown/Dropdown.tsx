import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import cn from 'classnames';
import { DropdownDirection } from 'shared/types/ui';
import styles from './Dropdown.module.scss';
import { AppLink } from '..';

export interface DropdownItem {
    content: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    items: DropdownItem[];
    trigger?: ReactNode;
    className?: string;
    direction?: DropdownDirection;
}

export const Dropdown = (props: DropdownProps) => {
    const { items, className, trigger, direction = 'bottom-right' } = props;
    return (
        <Menu as='div' className={cn(className, styles.Dropdown)}>
            <Menu.Button className={styles.button}>{trigger}</Menu.Button>
            <Menu.Items className={cn(styles.menu, styles[direction])}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type='button'
                            disabled={item.disabled}
                            className={cn(styles.item, {
                                [styles.active]: active,
                                [styles.disabled]: item.disabled,
                            })}
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                key={index}
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item
                            key={index}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
