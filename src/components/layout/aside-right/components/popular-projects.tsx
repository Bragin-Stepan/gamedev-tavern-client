import Image from 'next/image'
import Link from 'next/link'
import { FaHandsHelping } from 'react-icons/fa'

import { Badge } from '@/components/ui/common/badge'
import { Button } from '@/components/ui/common/button'
import { Typography } from '@/components/ui/common/typography'
import { WBlock } from '@/components/ui/shared/w-block'

export const PopularProjects = () => {
	const data = [1, 2, 3]

	return (
		<WBlock title='Популярные проекты'>
			{data.map(item => (
				<Link
					className='group flex flex-row gap-3 py-1 duration-200'
					key={item}
					href={'/project/1'}
				>
					<div className='relative aspect-video w-2/5 overflow-hidden rounded-md group-hover:scale-103 group-hover:duration-200'>
						<Image
							src={
								'https://imgs.crazygames.com/hazmob-fps-online-shooter_16x9/20240607181337/hazmob-fps-online-shooter_16x9-cover?metadata=none&quality=70&width=467'
							}
							alt=''
							fill
						/>
						<div className='bg-custom-access absolute bottom-1.5 left-1.5 z-2 rounded-md p-1'>
							<FaHandsHelping className='text-white' />
						</div>
					</div>
					<div className='-my-0.5 flex h-full w-3/5 flex-col justify-between group-hover:opacity-80'>
						<Typography
							numberLines={2}
							variant='subtitle2'
							className='text-custom-black text-ellipsis'
						>
							Grandmaster's Revenge
						</Typography>
						<Typography
							numberLines={1}
							variant='body2'
							className='text-custom-black text-ellipsis'
						>
							Движок: <span className='text-custom-gray'>Unreal Engine</span>
						</Typography>
					</div>
				</Link>
			))}
			<Link href={'/'}>
				<Button variant={'link'} size={'text'}>
					Смотреть все
				</Button>
			</Link>
		</WBlock>
	)
}
