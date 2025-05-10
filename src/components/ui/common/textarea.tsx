import * as React from 'react'

import { cn } from '@/utils/tailwind-merge'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
	return (
		<textarea
			data-slot='textarea'
			className={cn(
				'placeholder:text-custom-gray-dark aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 bg-custom-gray-dark/10 flex field-sizing-content min-h-16 w-full rounded-lg px-4 py-3 text-base transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-base',
				className
			)}
			{...props}
		/>
	)
}

export { Textarea }
