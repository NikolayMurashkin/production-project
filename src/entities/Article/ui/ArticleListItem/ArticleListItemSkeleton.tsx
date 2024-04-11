import { memo } from 'react';
import cn from 'classnames';
import { Skeleton } from 'shared/ui';
import { Card } from 'shared/ui/Card/Card';
import { ArticleView } from '../../model/types/article';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props;

        if (view === ArticleView.BIG) {
            return (
                <div
                    className={cn(
                        className,
                        styles.ArticleListItem,
                        styles.view
                    )}
                >
                    <Card className={styles.card}>
                        <div className={styles.header}>
                            <Skeleton width={30} height={30} border='50%' />
                            <Skeleton
                                width={150}
                                height={16}
                                className={styles.username}
                            />
                            <Skeleton
                                width={150}
                                height={16}
                                className={styles.date}
                            />
                        </div>
                        <Skeleton
                            width={250}
                            height={24}
                            className={styles.title}
                        />
                        <Skeleton height={200} className={styles.image} />
                        <div className={styles.footer}>
                            <Skeleton height={36} width={200} />
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <div className={cn(className, styles.ArticleListItem, styles.view)}>
                <Card className={styles.card}>
                    <div className={styles['image-wrapper']}>
                        <Skeleton
                            width={200}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles['info-wrapper']}>
                        <Skeleton width={130} height={16} />
                    </div>
                    <Skeleton
                        width={150}
                        height={16}
                        className={styles.title}
                    />
                </Card>
            </div>
        );
    }
);
