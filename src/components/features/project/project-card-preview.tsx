import Link from 'next/link'
import React from 'react'

import { Badge } from '@/components/ui/common/badge'
import { Typography } from '@/components/ui/common/typography'
import { BookmarkCount } from '@/components/ui/shared/bookmark-count'
import { CommentsCount } from '@/components/ui/shared/comments-count'
import { ViewCount } from '@/components/ui/shared/view-count'

import { ThreeDotsButton } from '../topic/topic-preview/components/three-dots-button'

interface ProjectCardPreviewProps {
	isDetail?: boolean
}

export const ProjectCardPreview = ({
	isDetail = true
}: ProjectCardPreviewProps) => {
	return (
		<Link href='/project/1' className='flex flex-col gap-4 md:flex-row'>
			<Badge className='bg-custom-access absolute top-7 left-7 z-2 text-white'>
				поиск людей
			</Badge>
			<div className='bg-custom-brand aspect-video w-full flex-shrink-0 rounded-lg md:w-1/3 md:min-w-[240px]'></div>

			<div className='flex w-full flex-col justify-between gap-2 transition-colors'>
				{/* Заголовок */}
				<div className='flex h-6 flex-row items-center justify-between'>
					<Typography variant='h2' numberLines={1}>
						Grandmaster's Revenge
					</Typography>
					<ThreeDotsButton />
				</div>

				{/* Описание */}
				<div className='overflow-hidden text-ellipsis'>
					<Typography variant='body2' numberLines={4}>
						В жизни каждой женщины бывает момент, когда вошла не в ту дверь...
						Последнее, что я помню - это вечеринка-маскарад в ночном клубе, и
						высокий подкачанный мужчина с белорусским акцентом, который
						предложил угостить меня коктейлем... В жизни каждой женщины бывает
						момент, когда вошла не в ту дверь... Последнее, что я помню - это
						вечеринка-маскарад в ночном клубе, и высокий подкачанный мужчина с
						белорусским акцентом, который предложил угостить меня коктейлем...
					</Typography>
				</div>

				{/* Детали */}
				<div className='flex flex-wrap items-center justify-between'>
					<div className='flex flex-wrap items-end gap-1'>
						<Typography variant='h3'>Движок</Typography>
						<Typography variant='body1'>Unity</Typography>
					</div>
					{isDetail && (
						<div className='flex items-center gap-4'>
							<CommentsCount />
							<BookmarkCount />
							<ViewCount />
						</div>
					)}
				</div>
			</div>
		</Link>
	)
}
