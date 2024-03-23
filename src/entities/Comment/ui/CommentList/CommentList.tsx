import { memo } from 'react';
import cn from 'classnames';
import { Comment } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import styles from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading,
    } = props;
    const { t } = useTranslation('articles');

    if (isLoading) {
        return (
            <div className={cn(className, styles.CommentList)}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={cn(className, styles.CommentList)}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard
                            key={comment.id}
                            comment={comment}
                            isLoading={isLoading}
                            className={styles.comment}
                        />
                    ))
                    : <Text text={t('Комментарии отсутствуют')} />
            }
        </div>
    );
});
