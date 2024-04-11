import cn from 'classnames';
import { Countries, CountrySelect } from 'entities/Country';
import { Currencies, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import {
    Avatar, Input, Loader,
} from 'shared/ui';
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
            <div className={cn(styles.profileCard, styles.loading, classname)}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={cn(styles.profileCard, styles.error, classname)}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке пользователя')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={cn(styles.profileCard, styles.content, classname, {
            [styles.editing]: !readonly,
        })}
        >
            <div className={styles.avatarWrapper}>
                <Avatar src={data?.avatar} alt={t('avatar')} />
            </div>
            <Input
                value={data?.first}
                placeholder={t('Имя')}
                className={styles.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                autofocus={!readonly}
            />
            <Input
                value={data?.lastname}
                placeholder={t('Фамилия')}
                className={styles.input}
                onChange={onChangeLastname}
                readonly={readonly}
            />
            <Input
                value={data?.age}
                placeholder={t('Возраст')}
                className={styles.input}
                onChange={onChangeAge}
                readonly={readonly}
                type="number"
            />
            <Input
                value={data?.city}
                placeholder={t('Город')}
                className={styles.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('Логин')}
                className={styles.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Аватар')}
                className={styles.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                readonly={readonly}
                onChange={onChangeCurrency}
                value={data?.currency}
                className={styles.input}
            />
            <CountrySelect
                readonly={readonly}
                onChange={onChangeCountry}
                value={data?.country}
                className={styles.input}
            />
        </div>
    );
};
