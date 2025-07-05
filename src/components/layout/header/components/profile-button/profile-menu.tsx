'use client'

import { useTheme } from 'next-themes'
import Link from 'next/link'
import React from 'react'
import { BiSolidIdCard } from 'react-icons/bi'
import { FaUser, FaUserFriends } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { IoNotifications } from 'react-icons/io5'
import { MdSunny } from 'react-icons/md'
import { PiBookmarkFill } from 'react-icons/pi'
import { TbMessageFilled } from 'react-icons/tb'
import { TbDeviceDesktopFilled } from 'react-icons/tb'

import { Avatar } from '@/components/ui/common/avatar'
import { Button } from '@/components/ui/common/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger
} from '@/components/ui/common/dropdown-menu'

import { useCurrent } from '@/hooks/use-current'

export const ProfileMenu = () => {
	const { theme, setTheme } = useTheme()
	const { user } = useCurrent()

	const isDark = theme === 'dark'
	const isLight = theme === 'light'

	return (
		<div className='ml-3 flex items-center'>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant={'link'} size={'icon'} className='relative'>
						<Avatar className='h-10 w-10' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<Link href={`/profile/${user?.uid}`}>
						<DropdownMenuItem>
							<FaUser />
							{user?.username || 'Профиль'}
						</DropdownMenuItem>
					</Link>
					<Link href='/chat'>
						<DropdownMenuItem>
							<TbMessageFilled />
							Сообщения<span className='text-custom-error'>(99+)</span>
						</DropdownMenuItem>
					</Link>
					<Link href='/profile/subscriptions'>
						<DropdownMenuItem>
							<FaUserFriends />
							Мои подписки
						</DropdownMenuItem>
					</Link>
					<Link href='/profile/bookmarks'>
						<DropdownMenuItem>
							<PiBookmarkFill />
							Избранное
						</DropdownMenuItem>
					</Link>
					{/* <Link href='/profile/notifications'>
						<DropdownMenuItem>
							<IoNotifications className='text-custom-error absolute animate-ping delay-1000 duration-3000' />
							<IoNotifications className='text-custom-error' />
							Уведомления
						</DropdownMenuItem>
					</Link> */}
					<Link href='/profile/settings'>
						<DropdownMenuItem>
							<IoMdSettings />
							Настройки
						</DropdownMenuItem>
					</Link>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							{isDark ? (
								<FaMoon />
							) : isLight ? (
								<MdSunny />
							) : (
								<TbDeviceDesktopFilled />
							)}
							Тема
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuItem onClick={() => setTheme('light')}>
									Светлая
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => setTheme('dark')}>
									Темная
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => setTheme('system')}>
									Системная
								</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
