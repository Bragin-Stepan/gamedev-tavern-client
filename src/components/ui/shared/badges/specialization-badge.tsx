import React from 'react'

import { cn } from '@/utils/tailwind-merge'

import { Badge } from '../../common/badge'

export const SpecializationBadge = ({ title }: { title?: string }) => {
	return (
		<Badge
			className={cn(
				title
					? 'bg-custom-brand/10 text-custom-brand'
					: 'bg-custom-gray/10 text-custom-gray'
			)}
		>
			{title ?? 'пользователь'}
		</Badge>
	)
}
