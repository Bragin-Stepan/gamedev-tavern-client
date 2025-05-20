import { Loader2 } from 'lucide-react'
import { ClassNameValue } from 'tailwind-merge'

import { cn } from '@/utils/tailwind-merge'

type Props = {
	variant?: 'spinner' | 'dots'
	className?: ClassNameValue
}

export const Loader = ({ className, variant = 'dots' }: Props) => {
	return variant === 'dots' ? (
		<div className={cn('flex items-center gap-1.5', className)}>
			<div className='h-1.5 w-1.5 animate-[pulse_1.4s_infinite_100ms] rounded-full bg-white' />
			<div className='h-1.5 w-1.5 animate-[pulse_1.4s_infinite_300ms] rounded-full bg-white' />
			<div className='h-1.5 w-1.5 animate-[pulse_1.4s_infinite_500ms] rounded-full bg-white' />
		</div>
	) : (
		<Loader2
			className={cn('text-custom-gray/20 h-12 w-12 animate-spin', className)}
		/>
	)
}
