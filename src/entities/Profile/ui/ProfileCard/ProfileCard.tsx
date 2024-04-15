import cn from 'classnames';
import { Countries, CountrySelect } from 'entities/Country';
import { Currencies, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { Avatar, HStack, Input, Loader, VStack } from 'shared/ui';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    classname?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCurrency?: (currency: Currencies) => void;
    onChangeCountry?: (country: Countries) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        classname,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCurrency,
        onChangeCountry,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack
                justify='center'
                max
                className={cn(styles.profileCard, styles.loading, classname)}
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify='center' max>
                <Text
                    className={cn(styles.profileCard, styles.error, classname)}
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке пользователя')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    return (
        <VStack
            gap='8'
            max
            className={cn(styles.profileCard, classname, {
                [styles.editing]: !readonly,
            })}
        >
            <HStack justify='center' max className={styles.avatarWrapper}>
                <Avatar src={data?.avatar} alt={t('avatar')} />
            </HStack>
            <Input
                value={data?.first}
                placeholder={t('Имя')}
                onChange={onChangeFirstname}
                readonly={readonly}
                autofocus={!readonly}
                data-testid='ProfileCard.firstname'
            />
            <Input
                value={data?.lastname}
                placeholder={t('Фамилия')}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid='ProfileCard.lastname'
            />
            <Input
                value={data?.age}
                placeholder={t('Возраст')}
                onChange={onChangeAge}
                readonly={readonly}
                type='number'
                data-testid='ProfileCard.age'
            />
            <Input
                value={data?.city}
                placeholder={t('Город')}
                onChange={onChangeCity}
                readonly={readonly}
                data-testid='ProfileCard.city'
            />
            <Input
                value={data?.username}
                placeholder={t('Логин')}
                onChange={onChangeUsername}
                readonly={readonly}
                data-testid='ProfileCard.username'
            />
            <Input
                value={data?.avatar}
                placeholder={t('Аватар')}
                onChange={onChangeAvatar}
                readonly={readonly}
                data-testid='ProfileCard.avatar'
            />
            <CurrencySelect
                readonly={readonly}
                onChange={onChangeCurrency}
                value={data?.currency}
            />
            <CountrySelect
                readonly={readonly}
                onChange={onChangeCountry}
                value={data?.country}
            />
        </VStack>
    );
};
