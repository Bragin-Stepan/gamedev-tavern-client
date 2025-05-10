import Link from 'next/link'

import { Avatar } from '@/components/ui/common/avatar'
import { Badge } from '@/components/ui/common/badge'
import { Button } from '@/components/ui/common/button'
import { Typography } from '@/components/ui/common/typography'
import { DecorativeIconSpecialization } from '@/components/ui/shared/decorative-icon-specializations'
import { WBlock } from '@/components/ui/shared/w-block'

export const UserProfileHeader = () => {
	return (
		<WBlock>
			<div className='flex flex-row items-center gap-3'>
				<Avatar className='h-14 w-14 lg:h-20 lg:w-20' />

				<div className='flex flex-col gap-0 lg:gap-1'>
					<div className='flex flex-row gap-1 lg:gap-2'>
						<Typography variant='h2'>EvilHomie</Typography>
						<Badge className='bg-custom-black text-custom-white'>UID: 1</Badge>
					</div>
					<div className='flex flex-row gap-1 lg:gap-2'>
						<Badge className='bg-custom-brand/10 text-custom-brand'>
							художник
						</Badge>
						<Badge className='bg-custom-error/10 text-custom-error'>
							собираю команду
						</Badge>
					</div>
				</div>
			</div>

			<Typography variant='body1'>
				Люблю программировать и путешествовать. В свободное время занимаюсь
				спортом и чтением
			</Typography>

			<div className='flex gap-5'>
				<Link href='#'>
					<Typography
						variant='subtitle2'
						className='text-custom-brand duration-200 hover:opacity-80'
					>
						Telegram
					</Typography>
				</Link>
				<Link href='#'>
					<Typography
						variant='subtitle2'
						className='text-custom-brand duration-200 hover:opacity-80'
					>
						VK
					</Typography>
				</Link>
			</div>

			<DecorativeIconSpecialization
				value='diceFire'
				className='text-custom-gray/10 dark:text-custom-gray/7 absolute top-3 right-3 h-14 w-14 -rotate-10 lg:h-22 lg:w-22'
			/>
		</WBlock>
	)
}
