'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { Button } from '@/components/ui/common/button'
import { Typography } from '@/components/ui/common/typography'
import { LoaderBlock } from '@/components/ui/shared/loader-block'
import { WBlock } from '@/components/ui/shared/w-block'

import {
	type FindAllTopicsQuery,
	useFindAllTopicsQuery
} from '@/graphql/generated/output'

import { TopicPreview } from './topic-preview'

interface TopicsListProps {
	categoryId?: string | null
	subcategoryId?: string | null
}

export const TopicsList = ({ categoryId, subcategoryId }: TopicsListProps) => {
	const [topicsList, setTopicsList] = useState<
		FindAllTopicsQuery['findAllTopics']
	>([])

	const { fetchMore, refetch, loading, data } = useFindAllTopicsQuery({
		variables: {
			categoryId: categoryId || undefined,
			subcategoryId: subcategoryId || undefined,
			pagination: {
				take: 12,
				skip: 0
			}
		},
		fetchPolicy: 'network-only',
		onCompleted(data) {
			setTopicsList(data?.findAllTopics || [])
		}
	})

	useEffect(() => {
		refetch({
			categoryId: categoryId || undefined,
			subcategoryId: subcategoryId || undefined
		})
	}, [categoryId, subcategoryId])

	const loadMore = () => {
		fetchMore({
			variables: {
				pagination: {
					take: 12,
					skip: topicsList.length
				}
			}
		}).then(({ data }) => {
			setTopicsList(prev => [...prev, ...(data?.findAllTopics || [])])
		})
	}

	if (loading && !topicsList.length) return <LoaderBlock />

	if (!topicsList.length && !loading) {
		return (
			<WBlock isBackground={false}>
				<div className='flex h-40 flex-col items-center justify-center gap-6'>
					<Typography variant='h1' className='text-custom-gray'>
						{subcategoryId ? 'Нет тем' : 'Выберите категорию или подкатегорию'}
					</Typography>
					<Link href='/topic/create'>
						<Button>Создать</Button>
					</Link>
				</div>
			</WBlock>
		)
	}

	return (
		<>
			{topicsList.map(topic => (
				<WBlock key={topic.id}>
					<TopicPreview topic={topic} />
				</WBlock>
			))}

			<LoaderBlock />
		</>
	)
}
