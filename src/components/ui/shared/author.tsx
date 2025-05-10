import Link from 'next/link'
import React from 'react'

import { Avatar } from './../common/avatar'
import { Badge } from './../common/badge'
import { Button } from './../common/button'
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger
} from './../common/hover-card'
import { Typography } from './../common/typography'
import { DecorativeIconSpecialization } from './decorative-icon-specializations'

export const Author = () => {
	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<Link
					className='flex w-fit items-center gap-2 lg:gap-3'
					href='/profile/1'
				>
					<Avatar className='h-13 w-13' />
					<div className='flex flex-col gap-1'>
						<Typography variant='body1' className='dark:opacity-100'>
							EvilHomie
						</Typography>
						<div className='flex flex-row gap-2'>
							<Badge className='bg-custom-brand/10 text-custom-brand'>
								2D Художник
							</Badge>
							<Badge className='bg-custom-access/10 text-custom-access'>
								ищу команду
							</Badge>
						</div>
					</div>
				</Link>
			</HoverCardTrigger>
			<HoverCardContent
				className='flex w-fit max-w-90 flex-col gap-1 lg:max-w-100 lg:gap-2'
				align='start'
				// side='right'
				sideOffset={-16}
			>
				<Link
					className='flex w-fit items-center gap-2 lg:gap-3'
					href='/profile/1'
				>
					<DecorativeIconSpecialization
						value='diceFire'
						className='text-custom-gray/10 dark:text-custom-gray/7 absolute top-2 right-3 h-14 w-14 -rotate-10 lg:h-16 lg:w-16'
					/>
					<Avatar className='h-13 w-13' />
					<div className='flex flex-col gap-1'>
						<div className='flex flex-row items-center gap-1'>
							<Typography variant='body1' className='dark:opacity-100'>
								EvilHomie
							</Typography>
							<Badge className='bg-custom-black text-custom-white'>
								UID: 1
							</Badge>
							{/* <Typography variant='body2' className='text-custom-brand'>
								UID: 1
							</Typography> */}
						</div>

						<div className='flex flex-row gap-2'>
							<Badge className='bg-custom-brand/10 text-custom-brand'>
								2D Художник
							</Badge>
							<Badge className='bg-custom-access/10 text-custom-access'>
								ищу команду
							</Badge>
						</div>
					</div>
				</Link>
				<Typography variant='body1'>Концепт художник / Иллюстратор</Typography>
				<Typography variant='body2' className='-mt-1'>
					Создаю игры и обучаю людей. В свободное время занимаюсь стримингом и
					ведением канала на YouTube.
				</Typography>
				<div className='my-1 -mt-1 flex flex-row gap-2 lg:gap-3'>
					<Button variant={'link'} size={'text'}>
						Telegram
					</Button>
					<Button variant={'link'} size={'text'}>
						VK
					</Button>
				</div>
				<Button size={'sm'}>Подписаться</Button>
			</HoverCardContent>
		</HoverCard>
	)
}
