import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import styles from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

// можно было классы передавать вот так
// const justifyClasses: Record<FlexJustify, string> = {
//     start: styles['justify-start'],
//     center: styles['justify-center'],
//     end: styles['justify-end'],
//     between: styles['justify-between'],
// };
type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
        max,
    } = props;

    return (
        <div
            className={cn(
                className,
                styles.Flex,
                // justifyClasses[justify],
                styles[`justify-${justify}`],
                styles[`align-${align}`],
                styles[`direction-${direction}`],
                gap && styles[`gap-${gap}`],
                {
                    [styles.max]: max,
                }
            )}
        >
            {children}
        </div>
    );
};
