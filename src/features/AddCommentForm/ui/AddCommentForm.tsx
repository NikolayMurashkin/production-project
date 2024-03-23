import { memo, useCallback } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button, Input } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DymanicModuleLoader/DynamicModuleLoader';
import styles from './AddCommentForm.module.scss';
import { getAddCommentFormText } from '../model/selectors/addCommentForm';
import { addCommentFormActions, addCommentFormReducer } from '../model/slices/addCommentFormSlice';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const {
        className,
        onSendComment,
    } = props;

    const { t } = useTranslation('comment');
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHanlder = useCallback(() => {
        onSendComment(text);
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cn(className, styles.AddCommentForm)}>
                <Input
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                    className={styles.input}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            onSendHanlder();
                        }
                    }}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHanlder}
                >
                    {t('Отправить')}
                </Button>
            </div>

        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
