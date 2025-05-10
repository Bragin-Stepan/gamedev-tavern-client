import React from 'react'
import { type ClassNameValue } from 'tailwind-merge'

import { cn } from '@/utils/tailwind-merge'

import { IconName } from './icon.type'
import { iconsOption } from './icons.options'

interface DecorativeIconSpecializationProps {
	value: IconName
	className?: ClassNameValue
}

export const DecorativeIconSpecialization = ({
	value,
	className
}: DecorativeIconSpecializationProps) => {
	const icon = iconsOption.find(item => item.value === value)

	if (!icon) return null

	const IconComponent = icon.icon

	return <IconComponent className={cn(className)} />
}
