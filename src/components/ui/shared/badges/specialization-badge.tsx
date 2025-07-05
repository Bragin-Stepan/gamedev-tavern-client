import React from 'react'

import { PathCareerType } from '@/graphql/generated/output'

import { cn } from '@/utils/tailwind-merge'

import { Badge } from '../../common/badge'

interface Props {
	title?: string
	careerPath?: PathCareerType
}

export const SpecializationBadge = ({ title, careerPath }: Props) => {
	const getBadgeStyle = () => {
		switch (careerPath) {
			case PathCareerType.Art:
				return 'bg-custom-brand/10 text-custom-brand'
			case PathCareerType.Developer:
				return 'bg-custom-developer/10 text-custom-developer'
			case PathCareerType.Manager:
				return 'bg-custom-manager/10 text-custom-manager'
			case PathCareerType.Other:
				return 'bg-custom-other/10 text-custom-other'
			default:
				return 'bg-custom-gray/10 text-custom-gray'
		}
	}

	return (
		<Badge className={cn(getBadgeStyle())}>{title ?? 'пользователь'}</Badge>
	)
}
