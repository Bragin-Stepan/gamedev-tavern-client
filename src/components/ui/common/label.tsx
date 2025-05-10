'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import * as React from 'react'

import { cn } from '@/utils/tailwind-merge'

function Label({
	className,
	...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
	return (
		<LabelPrimitive.Root
			data-slot='label'
			className={cn(
				'text-custom-black flex items-center gap-2 text-sm leading-none font-normal duration-100 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 lg:text-base',
				className
			)}
			{...props}
		/>
	)
}

export { Label }
