import Image from 'next/image'
import Link from 'next/link'
import { FaHandsClapping } from 'react-icons/fa6'

import { Badge } from '@/components/ui/common/badge'
import { Button } from '@/components/ui/common/button'
import { Typography } from '@/components/ui/common/typography'
import { AvatarGroup } from '@/components/ui/shared/avatar-group'
import { WBlock } from '@/components/ui/shared/w-block'

export const PopularTopics = () => {
	const data = [1, 2, 3]

	return (
		<WBlock title='Обсуждаемое'>
			{data.map(item => (
				<Link
					className='flex flex-row items-center gap-3 py-1 duration-200 hover:opacity-80'
					key={item}
					href={'/category/subcategory/123'}
				>
					<div className='flex h-full flex-col justify-between'>
						<Typography
							numberLines={1}
							variant='subtitle2'
							className='text-custom-black text-ellipsis'
						>
							Ищу разработчиков в команду, работаю над FPS шутером (UNREAL
							ENGINE)
						</Typography>
						<Typography
							numberLines={2}
							variant='body2'
							className='text-custom-gray text-ellipsis'
						>
							Представляю небольшую команду людей, которые неравнодушны к
							игровой индустрии и геймдеву в частности. На сегодняшний день
							активной и непосредственной разработкой я занимаюсь в соло.
						</Typography>
					</div>
					<AvatarGroup />
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
