'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { ClassNameValue } from 'tailwind-merge'

import { cn } from '@/utils/tailwind-merge'

import { Button } from '../common/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '../common/dropdown-menu'
import { Typography } from '../common/typography'

type TItems = {
	id: string
	path: string
	title: string
}

type Props = {
	title: string
	items: TItems[]
	className?: ClassNameValue
}

export const DropdownLinkButton = ({ title, items, className }: Props) => {
	const [open, setOpen] = useState(false)

	return (
		<DropdownMenu onOpenChange={setOpen}>
			<DropdownMenuTrigger asChild>
				<Button
					variant={'link'}
					size={'text'}
					className={cn('text-custom-black flex items-center gap-2', className)}
				>
					<Typography variant='h3'>{title}</Typography>
					{open ? (
						<IoIosArrowUp className='text-custom-black' />
					) : (
						<IoIosArrowDown className='text-custom-black' />
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='start'>
				{items.map((item: TItems) => (
					<Link href={item.path} key={item.id}>
						<DropdownMenuItem>{item.title}</DropdownMenuItem>
					</Link>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
