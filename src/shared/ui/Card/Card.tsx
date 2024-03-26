import { HTMLAttributes, memo, ReactNode } from 'react';
import cn from 'classnames';
import styles from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <div className={cn(className, styles.Card)} {...otherProps}>
            {children}
        </div>
    );
});
