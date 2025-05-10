'use client'

import React from 'react'
import { FaApple, FaGoogle } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { useMediaQuery } from 'react-responsive'

import { Button } from '@/components/ui/common/button'
import { Typography } from '@/components/ui/common/typography'
import { WBlock } from '@/components/ui/shared/w-block'

import { useCurrent } from '@/hooks/use-current'

import { BlockTitle } from '../../../../ui/shared/block-title'

export const SettingsGeneralForm = () => {
	const isSmallScreen = useMediaQuery({ query: '(max-width: 1023px)' })
	const { user } = useCurrent()

	return (
		<WBlock isBackground={false}>
			<WBlock>
				<BlockTitle title={'Основные'} />
			</WBlock>

			<WBlock title='Почта'>
				<Typography variant='body1'>{user?.email}</Typography>
				<Button
					variant={'link'}
					size={'text'}
					className='text-custom-brand justify-start'
				>
					Изменить
				</Button>
			</WBlock>

			<WBlock title='Пароль'>
				<Typography variant='body1'>*********</Typography>
				<Button
					variant={'link'}
					size={'text'}
					className='text-custom-brand justify-start'
				>
					Изменить
				</Button>
			</WBlock>

			<WBlock title='Подписка Plus'>
				<Typography variant='body1'>Не активна</Typography>
				<Button
					variant={'link'}
					size={'text'}
					className='text-custom-brand justify-start'
				>
					Купить
				</Button>
			</WBlock>

			<WBlock title='Связанные аккаунты'>
				<div className='flex flex-row gap-2 lg:gap-2'>
					<Button
						variant={'ghost'}
						size={isSmallScreen ? 'sm' : 'lg'}
						className='bg-custom-error justify-start text-white'
					>
						<FaGoogle className='mr-1' />
						Nickname
						<IoClose className='text-white/50' />
					</Button>
					<Button
						variant={'ghost'}
						size={isSmallScreen ? 'sm' : 'lg'}
						className='justify-start'
					>
						<FaApple />
						Apple
					</Button>
				</div>
			</WBlock>

			<WBlock title='Прочее'>
				<Button
					variant={'link'}
					size={'text'}
					className='text-custom-brand justify-start'
				>
					Выйти со всех устройств
				</Button>
				<Button
					variant={'link'}
					size={'text'}
					className='text-custom-error justify-start'
				>
					Удалить аккаунт
				</Button>
			</WBlock>
		</WBlock>
	)
}
