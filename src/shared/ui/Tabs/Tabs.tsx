import { memo, useCallback } from 'react';
import cn from 'classnames';
import styles from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem {
    value: string;
    content: string;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
    } = props;

    const clickHandle = useCallback((tab: TabItem) => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={cn(className, styles.Tabs)}>
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    className={cn(styles.tab, { [styles.active]: tab.value === value })}
                    onClick={() => clickHandle(tab)}
                    theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
