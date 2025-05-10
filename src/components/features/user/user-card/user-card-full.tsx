import { FaAnglesUp } from 'react-icons/fa6'
import { HiEye } from 'react-icons/hi'

import { Button } from '@/components/ui/common/button'
import {
	Carousel,
	CarouselMainContainer,
	SliderMainItem
} from '@/components/ui/common/carousel'
import { Divider } from '@/components/ui/common/divider'
import { Typography } from '@/components/ui/common/typography'
import { ParagraphItem } from '@/components/ui/shared/paragraph-item'
import { WBlock } from '@/components/ui/shared/w-block'

export const UserCardFull = () => {
	return (
		<WBlock>
			<div className='flex flex-row justify-between'>
				<Typography variant='h1'>Narrative Designer / Game Designer</Typography>
				<div className='flex flex-row gap-2 lg:gap-3'>
					<Button
						type='button'
						className='bg-custom-gray/10 text-custom-brand'
						size='icon'
					>
						<FaAnglesUp size={16} className='text-custom-brand' />
					</Button>
					<Button
						type='button'
						className='bg-custom-gray/10 text-custom-access'
						size='icon'
					>
						<HiEye size={20} className='text-custom-access' />
					</Button>
				</div>
			</div>
			<Divider />

			<ParagraphItem
				title='Опыт работы'
				text='7+ лет в создании иллюстраций, разработке персонажей, UI-дизайне для игр и рекламы'
			/>

			<ParagraphItem
				title='Описание'
				text='Ищу работу удаленно, или фултайм в студии (Возможен переезд). Разовые
					проекты тоже интересны'
			/>

			<ParagraphItem
				title='Направление'
				isHtmlTags
				text='— Нарративный дизайн и сценаристика: разработка и проработка
						концепций/синопсисов сюжета (в т.ч. с акцентом на культурные
						особенности и исторический контекст), персонажей, диалогов, мира
						игры и внутриигровых механик;
						<br />— Написание и редактура внутриигрового текста, включая
						комиксы, описания предметов, реплики NPC и т.д. ;<br />— Создание и
						корректировка игровых механик и GDD, игровой дизайн, интеграция
						нарратива в геймплей, содействие гейм-дизайнеру;
						<br />— Разработка технических заданий для гейм-дизайнеров,
						программистов, художников;
						<br />— Режиссура внутриигровых событий, создание и настройка
						аудиовизуального контента с использованием инструментов Unity;
						<br />— Работа над проектами различных жанров и направлений: от
						мобильных арканоидов до кроссплатформенных MMORPG;
						<br />— Участие в поддержке игровых проектов на всех этапах, от
						пред-продакшена до пост-релиза.'
			/>

			<ParagraphItem
				title='Навыки'
				text='Photoshop, Illustrator, Procreate, Blender, Zbrush, 3ds Max, Maya'
			/>

			<div className='flex w-full flex-col gap-2 lg:gap-3'>
				<Typography variant='h3'>Портфолио</Typography>
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
			</div>
		</WBlock>
	)
}
