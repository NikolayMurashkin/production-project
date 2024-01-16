import cn from 'classnames';
import { CSSProperties, useMemo } from 'react';
import styles from './Avatar.module.scss';

interface AvatarProps {
    src?: string;
    alt?: string;
    size?: number;
    className?: string;
}

export const Avatar = (props: AvatarProps) => {
    const {
        src, alt, size = 100, className,
    } = props;

    const defaultSrc = 'https://i.pinimg.com/originals/d5/4e/d7/d54ed7505c4392f202f96715b42ce7e7.jpg';

    const inlineStyles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);
    return (
        <img
            src={src || defaultSrc}
            alt={alt}
            className={cn(styles.avatar, className)}
            style={inlineStyles}
        />
    );
};
