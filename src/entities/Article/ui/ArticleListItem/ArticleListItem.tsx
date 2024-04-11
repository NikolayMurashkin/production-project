import { HTMLAttributeAnchorTarget, memo } from 'react';
import cn from 'classnames';
import { AppLink, Avatar, Text } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView
} from '../../model/types/article';
import styles from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlock/ArticleTextBlock';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target = '_self',
    } = props;
    const { t } = useTranslation('articles');

    const types = <Text text={article.type.join(', ')} className={styles.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={styles.views} />
            <Icon Svg={EyeIcon} />
        </>
    );
    const image = <img src={article.img} alt={article.title} className={styles.image} />;

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

        return (
            <div className={cn(className, styles.ArticleListItem, styles[view])}>
                <Card className={styles.card}>
                    <div className={styles.header}>
                        <Avatar src={article.user.avatar} size={30} />
                        <Text text={article.user.username} className={styles.username} />
                        <Text text={article.createdAt} className={styles.date} />
                    </div>
                    <Text text={article.title} className={styles.title} />
                    {types}
                    {image}
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={styles['text-block']} />
                    )}
                    <div className={styles.footer}>
                        <AppLink
                            to={RoutePath.article_details + article.id}
                            target={target}
                        >
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('Читать далее')}
                            </Button>

                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            to={RoutePath.article_details + article.id}
            target={target}
            className={cn(className, styles.ArticleListItem, styles[view])}
        >
            <Card className={styles.card}>
                <div className={styles['image-wrapper']}>
                    {image}
                    <Text text={article.createdAt} className={styles.date} />
                </div>
                <div className={styles['info-wrapper']}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={styles.title} />
            </Card>
        </AppLink>
    );
});
