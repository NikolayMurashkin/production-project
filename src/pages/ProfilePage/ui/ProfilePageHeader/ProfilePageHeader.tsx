import { StateSchema } from 'app/providers/StoreProvider';
import {
    getProfileForm,
    profileActions,
    updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { HStack } from 'shared/ui';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

interface ProfilePageHeaderProps {
    readonly?: boolean;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { readonly } = props;
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();

    const currentUserId = useSelector((state: StateSchema) =>
        getUserAuthData(state)
    )?.id;
    const profileId = useSelector((state: StateSchema) =>
        getProfileForm(state)
    )?.id;

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
        <HStack justify='between' max>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div>
                    {readonly ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={handlerReadonly}
                        >
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <HStack gap='8'>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={handleSave}
                            >
                                {t('Сохранить')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={handleCancel}
                            >
                                {t('Отмена')}
                            </Button>
                        </HStack>
                    )}
                </div>
            )}
        </HStack>
    );
};
