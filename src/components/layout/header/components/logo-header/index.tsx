import Link from 'next/link'

import { Typography } from '@/components/ui/common/typography'

import { cn } from '@/utils/tailwind-merge'

type Props = {
	variant?: 'sm' | 'md'
	className?: string
}

export const LogoHeader = ({ variant = 'sm', className }: Props) => {
	return variant === 'sm' ? (
		<Link href={'/'} className={className}>
			<div className='mr-4 flex flex-col justify-between'>
				<Typography
					variant='h2'
					className='text-custom-brand h-5 text-xl font-bold uppercase'
				>
					GAMEDEV
				</Typography>
				<Typography
					variant='body2'
					className='font-bold text-white uppercase not-italic'
				>
					таверна <span className='text-custom-gray'>beta</span>
				</Typography>
			</div>
		</Link>
	) : (
		<Link
			href={'/'}
			className={cn('flex-grow items-center gap-4 pl-34', className)}
		>
			{/* <img src={imgLogo.src} alt='logo' className='h-10 w-10' /> */}
			<div className='mr-5 flex flex-col justify-between'>
				<Typography
					variant='h3'
					className='text-custom-brand h-6 text-xl font-bold uppercase'
				>
					GAMEDEV
				</Typography>
				<Typography
					variant='caption'
					className='font-bold text-white uppercase not-italic'
				>
					таверна <span className='text-custom-gray'>beta</span>
				</Typography>
			</div>
		</Link>
	)
}
