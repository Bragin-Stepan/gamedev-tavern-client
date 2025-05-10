import Link from 'next/link'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

import { Button } from '@/components/ui/common/button'
import { Typography } from '@/components/ui/common/typography'
import { Author } from '@/components/ui/shared/author'
import { BookmarkCount } from '@/components/ui/shared/bookmark-count'
import { CommentsCount } from '@/components/ui/shared/comments-count'
import { ViewCount } from '@/components/ui/shared/view-count'
import { WBlock } from '@/components/ui/shared/w-block'

import { ThreeDotsButton } from './components/three-dots-button'

export const TopicPreview = () => {
	return (
		<WBlock isBackground={false}>
			<div className='flex flex-row items-center justify-between'>
				<Author />
				<ThreeDotsButton />
			</div>
			<Link
				href={'/category/subcategory/123'}
				className='flex flex-col gap-2 duration-200 hover:opacity-80'
			>
				<Typography variant='h2'>
					Ищу разработчиков в команду, работаю над FPS шутером (UNREAL ENGINE)
				</Typography>
				<Typography variant='body1' numberLines={3}>
					Представляю небольшую команду людей, которые неравнодушны к игровой
					индустрии и геймдеву в частности. На сегодняшний день активной и
					непосредственной разработкой я занимаюсь в соло. Основная и
					изначальная моя деятельность – это гейм-дизайн и 3d-environment/props
					моделлинг, поэтому всё остальное я изучал (и до сих изучаю) и начинал
					делать с нулевым багажом практических знаний.
				</Typography>
			</Link>
			<Button variant={'link'} size={'text'} className='w-fit'>
				Unreal Engine / Туториалы
			</Button>
			<div className='-mt-1 flex items-center justify-between'>
				<Typography variant='body1' className='text-custom-gray'>
					9 часов назад
				</Typography>
				<div className='flex items-center gap-4'>
					<CommentsCount />
					<BookmarkCount />
					<ViewCount />
				</div>
			</div>
		</WBlock>
	)
}
