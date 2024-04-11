import { memo, useMemo, useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import cn from 'classnames';
import { LangSwitcher } from 'shared/ui';
import { useSelector } from 'react-redux';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { ThemeSwitcher } from '../../../ThemeSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )),
        [collapsed, sidebarItemsList]
    );

    return (
        <menu
            data-testid='sidebar'
            className={cn(styles.Sidebar, className, {
                [styles.collapsed]: collapsed,
            })}
        >
            <Button
                data-testid='sidebar-toggle'
                onClick={onToggle}
                className={styles.collapseButton}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>{itemsList}</div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={styles.lang} />
            </div>
        </menu>
    );
});
