import React from 'react'
import { ClassNameValue } from 'tailwind-merge'

import { cn } from '@/utils/tailwind-merge'

import { Typography } from '../common/typography'

interface ParagraphItemProps {
	title: string
	text: string
	isHtmlTags?: boolean
	className?: ClassNameValue
}

export const ParagraphItem = ({
	title,
	text,
	isHtmlTags = false,
	className
}: ParagraphItemProps) => {
	return (
		<div className={cn(className, 'flex flex-col gap-0 lg:gap-1')}>
			<Typography variant='h2'>{title}</Typography>
			<Typography
				variant='body1'
				className='[&_a]:text-custom-brand [&_a]:font-semibold'
			>
				{isHtmlTags ? (
					<span dangerouslySetInnerHTML={{ __html: text }} />
				) : (
					text
				)}
			</Typography>
		</div>
	)
}
