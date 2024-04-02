import {
    memo, MutableRefObject, ReactNode, useRef,
} from 'react';
import cn from 'classnames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import styles from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
    } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <section className={cn(className, styles.Page)} ref={wrapperRef}>
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
