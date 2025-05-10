import Link from 'next/link'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaEyeSlash, FaFontAwesomeFlag } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'

import { Button } from '@/components/ui/common/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/common/dropdown-menu'

export const ThreeDotsButton = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size='icon' variant={'link'}>
					<BsThreeDots className='text-custom-gray' size={24} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<Link href={'/profile/settings/blog'}>
					<DropdownMenuItem>
						<MdEdit />
						Редактировать
					</DropdownMenuItem>
				</Link>
				<DropdownMenuItem className='text-custom-error hover:text-custom-error'>
					<FaFontAwesomeFlag />
					Пожаловаться
				</DropdownMenuItem>
				<DropdownMenuItem className='text-custom-error hover:text-custom-error'>
					<FaEyeSlash />
					Заблокировать
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
