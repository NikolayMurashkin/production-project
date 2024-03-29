import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm, profileActions, updateProfileData } from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    readonly?: boolean;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        readonly,
    } = props;
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();

    const currentUserId = useSelector((state: StateSchema) => getUserAuthData(state))?.id;
    const profileId = useSelector((state: StateSchema) => getProfileForm(state))?.id;

    const handlerReadonly = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const handleCancel = useCallback(() => {
        dispatch(profileActions.onCancel());
    }, [dispatch]);

    const handleSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const canEdit = profileId === currentUserId;

    return (
        <div className={styles.header}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div className={styles['buttons-wrapper']}>
                    {readonly ? (
                        <Button
                            className={styles.editBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={handlerReadonly}
                        >
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <div className={styles.buttons}>
                            <Button
                                className={styles['edit-button']}
                                theme={ButtonTheme.OUTLINE}
                                onClick={handleSave}
                            >
                                {t('Сохранить')}
                            </Button>
                            <Button
                                className={styles.editBtn}
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={handleCancel}
                            >
                                {t('Отмена')}
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
