import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils/tailwind-merge'

const buttonVariants = cva(
	'cursor-pointer inline-flex duration-200 items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-30 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition',
	{
		variants: {
			variant: {
				default: 'bg-custom-brand text-white hover:opacity-80',
				destructive:
					'bg-custom-error text-white hover:bg-custom-error/90 focus-visible:ring-custom-error/20 dark:focus-visible:ring-custom-error/40',
				outline:
					'ring-2 bg-custom-brand/10 ring-custom-brand/20 text-custom-brand hover:opacity-80',
				secondary: 'bg-custom-brand text-white hover:opacity-80',
				ghost: 'bg-custom-white hover:opacity-70 shadow',
				link: 'text-sm lg:text-base text-custom-brand hover:opacity-70'
			},
			size: {
				default: 'h-9 px-4 py-2 has-[>svg]:px-3',
				sm: 'h-8 rounded-lg gap-1.5 px-3 has-[>svg]:px-2.5',
				lg: 'text-md h-12 rounded-lg px-6 has-[>svg]:px-4',
				icon: 'size-9 hover:animate-pulse',
				text: 'py-0.5 lg:py-0'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: ButtonProps &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}) {
	const Comp = asChild ? Slot : 'button'

	return (
		<Comp
			data-slot='button'
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	)
}

export { Button, buttonVariants }
