import { memo } from 'react';
import cn from 'classnames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import styles from './ArticleImageBlock.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <div className={cn(className, styles.ArticleImageBlock)}>
            <img src={block.src} alt={block.title} className={styles.img} />
            {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
        </div>
    );
});
