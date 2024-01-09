import cn from 'classnames';
import { memo } from 'react';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = memo(({ className }: LoaderProps) => (
    <div className={cn('lds-ellipsis', className)}>
        <div />
        <div />
        <div />
        <div />
    </div>
));
