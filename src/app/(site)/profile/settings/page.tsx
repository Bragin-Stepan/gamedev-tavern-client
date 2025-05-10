import React from 'react'
import { FaAddressCard, FaUser } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { IoNotifications } from 'react-icons/io5'

import { SettingButton } from '@/components/features/user/setting/setting-button'
import { Divider } from '@/components/ui/common/divider'
import { BlockTitle } from '@/components/ui/shared/block-title'
import { WBlock } from '@/components/ui/shared/w-block'

export default function SettingsPage() {
	return (
		<WBlock>
			<BlockTitle title={'Настройки'} isArrow={false} />
			<Divider />
			<SettingButton
				iconComponent={
					<FaUser
						className='text-custom-gray group-hover:text-custom-brand duration-200'
						size={20}
					/>
				}
				Title={'Блог'}
				Description={'О себе, Направление, Ссылки'}
				href={'/profile/settings/blog'}
			/>
			<SettingButton
				iconComponent={
					<FaAddressCard
						className='text-custom-gray group-hover:text-custom-brand duration-200'
						size={20}
					/>
				}
				Title={'Карточка кандидата'}
				Description={'Специализация, Опыт работы, Навыки, Порфолио'}
				href={'/profile/settings/card'}
			/>
			<SettingButton
				iconComponent={
					<IoMdSettings
						className='text-custom-gray group-hover:text-custom-brand duration-200'
						size={20}
					/>
				}
				Title={'Основные'}
				Description={'Способы входа, Личные данные, Удаление аккаунта'}
				href={'/profile/settings/general'}
			/>
			<SettingButton
				iconComponent={
					<IoNotifications
						className='text-custom-gray group-hover:text-custom-brand duration-200'
						size={20}
					/>
				}
				Title={'Уведомления'}
				Description={'Уведомления, Письма'}
				href={'/profile/settings/notifications'}
			/>
		</WBlock>
	)
}
