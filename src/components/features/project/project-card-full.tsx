import Image from 'next/image'
import React from 'react'

import { Badge } from '@/components/ui/common/badge'
import { Button } from '@/components/ui/common/button'
import {
	Carousel,
	CarouselMainContainer,
	CarouselNext,
	CarouselPrevious,
	CarouselThumbsContainer,
	SliderMainItem,
	SliderThumbItem
} from '@/components/ui/common/carousel'
import { Divider } from '@/components/ui/common/divider'
import { Typography } from '@/components/ui/common/typography'
import { Author } from '@/components/ui/shared/author'
import { BookmarkCount } from '@/components/ui/shared/bookmark-count'
import { CommentsCount } from '@/components/ui/shared/comments-count'
import { DecorativeIconSpecialization } from '@/components/ui/shared/decorative-icon-specializations'
import { ParagraphItem } from '@/components/ui/shared/paragraph-item'
import { ViewCount } from '@/components/ui/shared/view-count'
import { WBlock } from '@/components/ui/shared/w-block'

import { CommentForm } from '../comments/comment-form'
import { ThreeDotsButton } from '../topic/topic-preview/components/three-dots-button'

export const ProjectCardFull = () => {
	return (
		<WBlock>
			<div className='flex flex-row items-center justify-between'>
				<Author />
				<ThreeDotsButton />
			</div>
			<Carousel
				carouselOptions={{
					dragFree: false,
					loop: true
				}}
			>
				<Badge className='bg-custom-access absolute top-4 left-4 z-2 text-white'>
					поиск людей
				</Badge>
				<CarouselNext className='bg-custom-brand ring-custom-white top-7/8 -translate-y-1/3 text-white' />
				<CarouselPrevious className='bg-custom-brand ring-custom-white top-7/8 -translate-y-1/3 text-white' />
				<CarouselMainContainer>
					{Array.from({ length: 5 }).map((_, index) => (
						<SliderMainItem key={index}>
							<div className='relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-transparent'>
								<Image
									src={
										'https://imgs.crazygames.com/car-games-car-racing-game_16x9/20240628180656/car-games-car-racing-game_16x9-cover?metadata=none&quality=40&width=1200&height=630&fit=crop'
									}
									alt=''
									className='aspect-video w-full object-cover'
									fill
								/>
							</div>
						</SliderMainItem>
					))}
				</CarouselMainContainer>
				<CarouselThumbsContainer>
					{Array.from({ length: 5 }).map((_, index) => (
						<SliderThumbItem
							key={index}
							index={index}
							className='aspect-video w-full'
						>
							<div className='relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-transparent'>
								<Image
									src={
										'https://imgs.crazygames.com/car-games-car-racing-game_16x9/20240628180656/car-games-car-racing-game_16x9-cover?metadata=none&quality=40&width=1200&height=630&fit=crop'
									}
									alt=''
									className='h-full w-full object-cover'
									fill
								/>
							</div>
						</SliderThumbItem>
					))}
				</CarouselThumbsContainer>
			</Carousel>

			<Divider />
			<Typography variant='h1' className='my-2'>
				Grandmaster's Revenge
			</Typography>
			<Divider />

			<ParagraphItem title='Жанр' text='Хоррор, стелс, песочница, пародия' />
			<ParagraphItem
				title='Платформы'
				isHtmlTags
				text='<a className="text-custom-brand" href="https://google.com">Steam</a>, <a href="https://google.com">VKPlay</a>'
			/>
			<div className='relative w-full'>
				<ParagraphItem title='Движок' text='Unity' />
				<DecorativeIconSpecialization
					value='unreal'
					className='text-custom-gray/10 dark:text-custom-gray/7 absolute -top-25 right-3 h-34 w-34 -rotate-10 lg:h-40 lg:w-40'
				/>
			</div>
			<ParagraphItem
				title='Описание'
				text='В жизни каждой женщины бывает момент, когда вошла не в ту дверь... Последнее, что я помню - это вечеринка-маскарад в ночном клубе, и высокий подкачанный мужчина с белорусским акцентом, который предложил угостить меня коктейлем...'
			/>
			<ParagraphItem
				title='О проекте'
				text='Наша команда состоящая из 6 человек довольно долго работает на midcore проектом, который позволит совместить приятное с полезным. А именно интересный карточный рогалик с техниками microlearning на различные темы. В проекте была довольно длительная фаза прототипирование и пивотинга, но в настоящий момент все основные механики готовы и полным ходом идет подготовка демо для Gamescom и публикации проекта на itch.io.'
			/>
			<ParagraphItem
				title='Ключевые особенности'
				isHtmlTags
				text='- Случайное расположение предметов, необходимых для побега из этой обители зла!<br/>- Уникальные карты с интересными механиками<br/>- Интересные персонажи с уникальными способностями<br/>- Увлекательные мини-игры<br/>- Разнообразие тем для изучения'
			/>
			<ParagraphItem
				title='Ищем'
				isHtmlTags
				text='- 3D Художники (2D/3D) - 1-2 человека<br/>- Программиста (Unity) - 1-2 человека<br/>- Тестировщика - 1-2 человека<br/>- Дизайнера интерфейсов - 1-2 человека<br/>- Маркетолога - 1-2 человека<br/>- Аниматора - 1-2 человека<br/>- Саунд дизайнера - 1-2 человека<br/>- Музыканта - 1-2 человека'
			/>
			<Divider />
			<div className='-mt-1 flex items-center justify-between'>
				<Typography variant='body1' className='text-custom-gray'>
					9 часов назад
				</Typography>
				<div className='mt-3 flex items-center gap-4'>
					<CommentsCount />
					<BookmarkCount />
					<ViewCount />
				</div>
			</div>

			<CommentForm />
		</WBlock>
	)
}
