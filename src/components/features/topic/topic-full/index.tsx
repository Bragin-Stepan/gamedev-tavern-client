import Link from 'next/link'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

import { CommentForm } from '@/components/features/comments/comment-form'
import { Button } from '@/components/ui/common/button'
import { Typography } from '@/components/ui/common/typography'
import { Author } from '@/components/ui/shared/author'
import { BookmarkCount } from '@/components/ui/shared/bookmark-count'
import { CommentsCount } from '@/components/ui/shared/comments-count'
import { ViewCount } from '@/components/ui/shared/view-count'
import { WBlock } from '@/components/ui/shared/w-block'

import { type FindTopicBySlugQuery } from '@/graphql/generated/output'

import { formatDateTime } from '@/utils/date-format'

import { ProjectCardPreview } from '../../project/project-card-preview'

import { ThreeDotsButton } from './components/three-dots-button'

interface Props {
	topic: FindTopicBySlugQuery['findTopicBySlug']
}

export const TopicFull = ({ topic }: Props) => {
	if (!topic) {
		return null
	}

	console.log(topic.contentBlocks)

	return (
		<WBlock>
			<div className='flex flex-row items-center justify-between'>
				<Author />
				<ThreeDotsButton />
			</div>

			<Typography variant='h2'>{topic.title}</Typography>
			<Typography variant='body1'>
				Если вы не являетесь фанатом хотя бы одной из них, то дальше можно не
				читать.
			</Typography>

			<Typography variant='body1'>
				Итак, всё же являетесь. Тогда требуется наличие желания поучаствовать в
				разработке чего-нибудь похожего, уйма свободного времени, более-менее
				сносное финансовое положение без истеричного желания улучшать его денно
				и нощно любой ценой.
			</Typography>

			<Typography variant='body1'>
				Ещё было б неплохо быть в целом адекватной человекоособью, понимающей
				разницу между возможностями небольшого коллектива и большой студии. И
				понимающей, что «технические требования движка» и «необоснованные
				хотелки» — вещи разные. Ну и что за полгода слепить игру даже за
				сорокачасовую рабочую неделю нереально. Если чего-то из этого нет —
				дальше можно не читать.
			</Typography>

			<Typography variant='h2'>Краткое описание.</Typography>

			<Typography variant='body1'>
				Ещё было б неплохо быть в целом адекватной человекоособью, понимающей
				разницу между возможностями небольшого коллектива и большой студии. И
				понимающей, что «технические требования движка» и «необоснованные
				хотелки» — вещи разные. Ну и что за полгода слепить игру даже за
				сорокачасовую рабочую неделю нереально. Если чего-то из этого нет —
				дальше можно не читать.
			</Typography>

			{topic.attachedProject && (
				<WBlock className='bg-custom-gray-light'>
					<ProjectCardPreview isDetail={false} />
				</WBlock>
			)}

			<div className='-mt-1 flex items-center justify-between'>
				<Typography variant='body1' className='text-custom-gray'>
					{formatDateTime(topic.createdAt)}
				</Typography>
				<div className='flex items-center gap-4'>
					<CommentsCount />
					<BookmarkCount />
					<ViewCount />
				</div>
			</div>
			<CommentForm />
		</WBlock>
	)
}
