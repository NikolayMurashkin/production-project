import { CSSProperties, memo } from 'react';
import cn from 'classnames';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        height,
        width,
        border,
    } = props;

    const inlineStyles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div className={cn(className, styles.Skeleton)} style={inlineStyles} />
    );
});
