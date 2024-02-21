import { memo } from 'react';
import cn from 'classnames';
import styles from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    className?:string;
}

export const Text = memo((props: TextProps) => {
    const {
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        className,
    } = props;

    return (
        <div className={cn(styles[theme], styles[align], styles[size], className)}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
});
