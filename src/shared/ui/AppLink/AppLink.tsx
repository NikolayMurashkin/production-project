import { Link, LinkProps } from 'react-router-dom';
import { memo } from 'react';
import cn from 'classnames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={cn(cls.AppLink, className, { [cls[theme]]: true })}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
