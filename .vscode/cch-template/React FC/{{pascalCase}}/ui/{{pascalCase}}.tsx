import { memo } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './{{pascalCase}}.module.scss';

interface {{pascalCase}}Props {
    className?: string;
};

export const {{pascalCase}} = memo((props: {{pascalCase}}Props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={cn(className, styles.{{pascalCase}})} >
            {t('{{pascalCase}}')}
        </div>
    );
});
