import { HTMLAttributes, memo, ReactNode } from 'react';
import cn from 'classnames';
import styles from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        ...otherProps
    } = props;

    return (
        <div
            className={cn(className, styles.Card, styles[theme])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
