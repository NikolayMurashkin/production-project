import { memo } from 'react';
import cn from 'classnames';
import { Comment } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { Avatar, Skeleton } from 'shared/ui';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={cn(className, styles.CommentCard)}>
                <div className={styles.header}>
                    <Skeleton height={30} width={30} border="50%" />
                    <Skeleton height={16} width={100} className={styles.username} />
                </div>
                <Skeleton height={50} width="100%" className={styles.text} />
            </div>
        );
    }

    return (
        <div className={cn(className, styles.CommentCard)}>
            <div className={styles.header}>
                <Avatar
                    size={30}
                    src={comment?.user.avatar}
                />
                <Text
                    title={comment?.user.username}
                    className={styles.username}
                />
            </div>
            <Text
                text={comment?.text}
                className={styles.text}
            />
        </div>
    );
});
