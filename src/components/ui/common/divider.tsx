import React from 'react'
import { ClassNameValue } from 'tailwind-merge'

import { cn } from '@/utils/tailwind-merge'

type Props = {
	className?: ClassNameValue
}

export const Divider = ({ className }: Props) => {
	return (
		<div className='flex w-full flex-row gap-2 py-1'>
			<div
				className={cn(
					'bg-custom-gray h-0.5 w-2 rounded-full opacity-10',
					className
				)}
			/>
			<div
				className={cn(
					'bg-custom-gray h-0.5 w-8 rounded-full opacity-10',
					className
				)}
			/>
			<div
				className={cn(
					'bg-custom-gray h-0.5 w-full rounded-full opacity-15',
					className
				)}
			/>
			<div
				className={cn(
					'bg-custom-gray h-0.5 w-8 rounded-full opacity-10',
					className
				)}
			/>
			<div
				className={cn(
					'bg-custom-gray h-0.5 w-2 rounded-full opacity-10',
					className
				)}
			/>
		</div>
	)
}
