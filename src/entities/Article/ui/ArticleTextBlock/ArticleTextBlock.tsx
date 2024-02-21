import { memo } from 'react';
import cn from 'classnames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import styles from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <div className={cn(className, styles.ArticleTextBlock)}>
            {block.title && (
                <Text
                    title={block.title}
                    className={styles.title}
                />
            )}
            {block.paragraphs.map((paragraph) => (
                <Text
                    key={paragraph}
                    text={paragraph}
                    className={styles.paragraph}
                />
            ))}
        </div>
    );
});
