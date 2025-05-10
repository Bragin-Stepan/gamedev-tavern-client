'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/utils/tailwind-merge'

const checkboxColors = {
	default: {
		border: 'border-custom-gray/20',
		background: 'bg-custom-gray/10',
		checked: {
			background: 'data-[state=checked]:bg-custom-verified',
			border: 'data-[state=checked]:border-custom-verified',
			text: 'data-[state=checked]:text-white'
		},
		focus: {
			border: 'focus-visible:border-ring',
			ring: 'focus-visible:ring-ring/50'
		},
		invalid: {
			border: 'aria-invalid:border-custom-error',
			ring: 'aria-invalid:ring-custom-error/20 dark:aria-invalid:ring-custom-error/40'
		}
	}
}

function Checkbox({
	className,
	...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
	return (
		<CheckboxPrimitive.Root
			data-slot='checkbox'
			className={cn(
				'peer size-5 shrink-0 cursor-pointer rounded-[5px] border transition-shadow outline-none disabled:cursor-not-allowed disabled:opacity-50',
				checkboxColors.default.border,
				checkboxColors.default.background,
				checkboxColors.default.checked.background,
				checkboxColors.default.checked.border,
				checkboxColors.default.checked.text,
				checkboxColors.default.focus.border,
				checkboxColors.default.focus.ring,
				checkboxColors.default.invalid.border,
				checkboxColors.default.invalid.ring,
				className
			)}
			{...props}
		>
			<CheckboxPrimitive.Indicator
				data-slot='checkbox-indicator'
				className='flex items-center justify-center text-current transition-none'
			>
				<CheckIcon className='size-3.5' />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	)
}

export { Checkbox }
