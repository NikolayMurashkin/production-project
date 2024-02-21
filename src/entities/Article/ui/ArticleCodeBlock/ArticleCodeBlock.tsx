import { memo } from 'react';
import cn from 'classnames';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import styles from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <div className={cn(styles.articleCodeBlock, className)}>
            <Code text={block.code} />
        </div>
    );
});
