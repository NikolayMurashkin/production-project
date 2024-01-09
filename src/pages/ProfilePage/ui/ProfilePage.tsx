import { useTranslation } from 'react-i18next';
import { profileReducer } from 'entities/Profile';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DymanicModuleLoader/DynamicModuleLoader';
import { memo } from 'react';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={className}>
                {t('PROFILE PAGE')}
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
