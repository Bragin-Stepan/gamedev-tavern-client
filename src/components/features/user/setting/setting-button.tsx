import Link from 'next/link'
import React from 'react'

import { Typography } from '@/components/ui/common/typography'

type Props = {
	iconComponent: React.ReactNode
	Title: string
	Description: string
	href: string
}

export const SettingButton = ({
	iconComponent,
	Title,
	Description,
	href
}: Props) => {
	return (
		<Link
			href={href}
			className='group hover:bg-custom-gray/10 flex w-full cursor-pointer flex-row items-center gap-8 rounded-xl px-6 py-2 duration-100'
		>
			{iconComponent}
			<div className='flex flex-col'>
				<Typography variant='h3'>{Title}</Typography>
				<Typography className='text-custom-gray'>{Description}</Typography>
			</div>
		</Link>
	)
}
