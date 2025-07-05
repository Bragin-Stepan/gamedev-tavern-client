import * as React from 'react'

import { cn } from '@/utils/tailwind-merge'

// Конфигурация базовых стилей для Input
const inputStyles = {
	base: 'file:text-custom-white placeholder:text-custom-gray bg-custom-gray/10 selection:bg-primary selection:text-primary-foreground dark:bg-input/30',
	layout: 'flex w-full min-w-0 rounded-xl px-5 py-3 text-md',
	transitions: 'transition-[color,box-shadow] outline-none',
	states: {
		disabled:
			'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
		invalid:
			'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
		// focus: 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
	},
	fileInput:
		'file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium',
	typeDate:
		'appearance-none cursor-pointer text-custom-gray [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-20 [&::-webkit-calendar-picker-indicator]:-ml-5'
}

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
	return (
		<input
			type={type}
			data-slot='input'
			className={cn(
				inputStyles.base,
				inputStyles.layout,
				inputStyles.transitions,
				inputStyles.states.disabled,
				inputStyles.states.invalid,
				inputStyles.fileInput,
				(type === 'date' || type === 'datetime-local') && inputStyles.typeDate,
				className
			)}
			{...props}
		/>
	)
}

export { Input }
