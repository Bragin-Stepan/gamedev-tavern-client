'use client'

import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { BiSolidCreditCardFront } from 'react-icons/bi'
import { FaGamepad } from 'react-icons/fa6'
import { RiEdit2Fill } from 'react-icons/ri'

import { Button } from '@/components/ui/common/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/common/dropdown-menu'

import { useAuth } from '@/hooks/use-auth'

export const CreateHeaderButton = () => {
	const { isAuthenticated } = useAuth()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				{/* <Button className="w-[36px] rounded-full" variant={'outline'}> */}
				<Button className='bg-white/10 text-white'>
					<Plus className='text-white' size={16} />
					Создать
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<Link href={isAuthenticated ? '/topic/edit' : '/auth/login'}>
					<DropdownMenuItem className='hover:text-custom-black'>
						<RiEdit2Fill className='text-custom-black' />
						Тему
					</DropdownMenuItem>
				</Link>
				<Link href={isAuthenticated ? '/project/edit' : '/auth/login'}>
					<DropdownMenuItem className='hover:text-custom-black'>
						<BiSolidCreditCardFront className='text-custom-black' />
						Проект
					</DropdownMenuItem>
				</Link>
				{/* <Link href='/'> */}
				<DropdownMenuItem className='hover:text-custom-black' disabled>
					<FaGamepad className='text-custom-black' />
					GameJam
				</DropdownMenuItem>
				{/* </Link> */}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
