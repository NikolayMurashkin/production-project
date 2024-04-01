import { memo, useCallback } from 'react';
import cn from 'classnames';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { ArticleView } from '../../model/types/article';
import styles from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view?: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const {
        className,
        view,
        onViewClick,
    } = props;

    const onClick = useCallback((newView: ArticleView) => () => {
        onViewClick?.(newView);
    }, [onViewClick]);

    return (
        <div className={className}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    onClick={onClick(viewType.view)}
                    className={styles.btn}
                    theme={ButtonTheme.CLEAR}
                >
                    <Icon Svg={viewType.icon} className={cn({ [styles.selected]: view === viewType.view })} />
                </Button>
            ))}
        </div>
    );
});
