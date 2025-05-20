import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/common/button'
import { Typography } from '@/components/ui/common/typography'
import { Author } from '@/components/ui/shared/author'
import { BookmarkCount } from '@/components/ui/shared/bookmark-count'
import { CommentsCount } from '@/components/ui/shared/comments-count'
import { PostContentList } from '@/components/ui/shared/post-content-list'
import { ViewCount } from '@/components/ui/shared/view-count'
import { WBlock } from '@/components/ui/shared/w-block'

import {
	FindAllTopicsQuery,
	FindProfileByUidQuery
} from '@/graphql/generated/output'

import { formatDateTime } from '@/utils/date-format'

import { ThreeDotsButton } from './components/three-dots-button'

interface TopicPreviewProps {
	topic: FindAllTopicsQuery['findAllTopics'][0]
}

export const TopicPreview = ({ topic }: TopicPreviewProps) => {
	return (
		<WBlock isBackground={false}>
			<div className='flex flex-row items-start justify-between'>
				<Author
					author={topic?.author as FindProfileByUidQuery['findProfileByUid']}
				/>
				<ThreeDotsButton />
			</div>
			<Link
				href={`/${topic?.subcategory.category.slug}/${topic?.subcategory.slug}/${topic?.slug}`}
				className='flex flex-col gap-2 duration-200 hover:opacity-80'
			>
				<Typography variant='h2'>{topic.title}</Typography>

				<PostContentList items={topic.contentBlocks} isShort={true} />
			</Link>
			<Link
				href={`/${topic?.subcategory.category.slug}/${topic?.subcategory.slug}`}
			>
				<Button variant={'link'} size={'text'} className='w-fit'>
					{topic.subcategory.category.title} / {topic.subcategory.title}
				</Button>
			</Link>
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
		</WBlock>
	)
}
