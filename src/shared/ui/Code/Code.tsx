import { memo, useCallback } from 'react';
import cn from 'classnames';
import styles from './Code.module.scss';
import { Button, ButtonTheme } from '../Button/Button';
import CopyIcon from '../../assets/icons/copy-20-20.svg';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const {
        className,
        text,
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={cn(className, styles.Code)}>
            <Button
                className={styles.copyBtn}
                theme={ButtonTheme.CLEAR}
                onClick={onCopy}
            >
                <CopyIcon className={styles.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
