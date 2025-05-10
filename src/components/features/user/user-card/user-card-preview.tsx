import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/common/button'
import {
	Carousel,
	CarouselMainContainer,
	SliderMainItem
} from '@/components/ui/common/carousel'
import { Divider } from '@/components/ui/common/divider'
import { Typography } from '@/components/ui/common/typography'
import { Author } from '@/components/ui/shared/author'
import { ParagraphItem } from '@/components/ui/shared/paragraph-item'
import { WBlock } from '@/components/ui/shared/w-block'

import { ThreeDotsButton } from '../../topic/topic-preview/components/three-dots-button'

export const UserCardPreview = () => {
	return (
		<WBlock isBackground={false}>
			<div className='flex flex-row items-center justify-between'>
				<Author />
				<ThreeDotsButton />
			</div>

			<Divider />

			<Link href={'/profile/1'}>
				<Typography variant='h1'>Narrative Designer / Game Designer</Typography>
			</Link>

			<Divider />

			<Link href={'/profile/1'}>
				{/* <Typography variant='body1'>
					7+ лет в создании иллюстраций, разработке персонажей, UI-дизайне для
					игр и рекламы
				</Typography> */}
				<ParagraphItem
					title='Опыт'
					text='7+ лет в создании иллюстраций, разработке персонажей, UI-дизайне для
					игр и рекламы'
				/>
			</Link>

			<Link href={'/profile/1'}>
				<ParagraphItem
					title='Описание'
					text='Ищу работу удаленно, или фултайм в студии (Возможен переезд). Разовые
                проекты тоже интересны'
				/>
			</Link>

			<Carousel
				carouselOptions={{ loop: true, align: 'start', dragFree: true }}
			>
				<div className='w-full overflow-hidden'>
					<CarouselMainContainer className='w-full'>
						{Array.from({ length: 12 }).map((_, index) => (
							<SliderMainItem
								key={index}
								className='flex-shrink-0 basis-auto bg-transparent'
							>
								<div className='bg-custom-brand h-30 w-30 rounded-md sm:h-50 sm:w-50'>
									Slide {index + 1}
								</div>
							</SliderMainItem>
						))}
					</CarouselMainContainer>
				</div>
			</Carousel>
		</WBlock>
	)
}
