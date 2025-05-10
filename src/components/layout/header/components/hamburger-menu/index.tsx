'use client'

import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'

import { Button } from '@/components/ui/common/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/common/dropdown-menu'

import { pages } from '../../config/pages'

export const HamburgerMenu = () => {
	return (
		<div className={'visable flex-grow md:hidden'}>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant={'link'} size={'icon'}>
						<RxHamburgerMenu size={24} className='text-custom-black' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='start'>
					{pages.map(page => (
						<Link href={page.path} key={page.id}>
							<DropdownMenuItem key={page.id}>{page.title}</DropdownMenuItem>
						</Link>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
