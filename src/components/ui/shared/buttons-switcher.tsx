'use client'

import React from 'react'
import { ClassNameValue } from 'tailwind-merge'

import { Button } from '@/components/ui/common/button'

import { cn } from '@/utils/tailwind-merge'

interface Tab {
	value: string
	label: string
}

interface ButtonsSwitcherProps {
	items: Tab[]
	activeTab: string
	onChange: (value: string) => void
	className?: ClassNameValue
}

export const ButtonsSwitcher: React.FC<ButtonsSwitcherProps> = ({
	items,
	activeTab,
	onChange,
	className
}) => {
	return (
		<div
			className={cn(
				'scrollbar-hide flex flex-row flex-wrap gap-2 overflow-x-auto',
				className
			)}
		>
			{items.map(tab => (
				<Button
					key={tab.value}
					size='lg'
					variant={activeTab === tab.value ? 'default' : 'ghost'}
					onClick={() => onChange(tab.value)}
				>
					{tab.label}
				</Button>
			))}
		</div>
	)
}
