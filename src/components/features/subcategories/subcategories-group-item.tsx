'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { Divider } from '@/components/ui/common/divider'
import { Typography } from '@/components/ui/common/typography'
import { LoaderBlock } from '@/components/ui/shared/loader-block'
import { WBlock } from '@/components/ui/shared/w-block'

import {
	FindAllTopicsQuery,
	FindPopularSubcategoriesQuery,
	useFindPopularSubcategoriesQuery
} from '@/graphql/generated/output'

import { TopicPreview } from '../topic/topic-preview'

interface Props {
	subcategories: FindPopularSubcategoriesQuery['findPopularSubcategories']
}

export const SubcategoriesGroupItem = ({ subcategories }: Props) => {
	const [subcategoryList, setSubcategoryList] = useState<
		FindPopularSubcategoriesQuery['findPopularSubcategories']
	>(subcategories ?? [])
	const [hasMore, setHasMore] = useState(true)

	const { data, fetchMore } = useFindPopularSubcategoriesQuery({
		variables: {
			pagination: {
				take: 4,
				skip: 0
			}
		},
		fetchPolicy: 'network-only'
	})

	useEffect(() => {
		if (data?.findPopularSubcategories) {
			setSubcategoryList(data.findPopularSubcategories)
			setHasMore(data.findPopularSubcategories.length === 4)
		}
	}, [data])

	const fetchMoreSubcategories = async () => {
		if (!hasMore) return

		setTimeout(async () => {
			const { data: newData } = await fetchMore({
				variables: {
					pagination: {
						take: 4,
						skip: subcategoryList.length
					}
				}
			})

			if (newData.findPopularSubcategories.length) {
				setSubcategoryList(prev => [
					...prev,
					...newData.findPopularSubcategories
				])
			} else {
				setHasMore(false)
			}
		}, 400)
	}

	return (
		<InfiniteScroll
			className='flex w-full flex-col gap-2 lg:gap-3'
			dataLength={subcategoryList.length}
			next={fetchMoreSubcategories}
			hasMore={hasMore}
			loader={<LoaderBlock />}
		>
			{subcategoryList.map(
				subcategory =>
					subcategory.topics.length > 0 && (
						<WBlock isBackground={false} key={subcategory.id}>
							<Typography
								variant='h2'
								className='w-fit py-2 duration-200 hover:opacity-80'
							>
								<Link
									href={`/${subcategory.category.slug}?sub=${subcategory.slug}`}
								>
									<span className='mr-2 opacity-25'>
										{subcategory.category.title}
									</span>
									{subcategory.title}

									{/* {`${subcategory.category.title} / ${subcategory.title}`} */}
								</Link>
							</Typography>
							<WBlock>
								{subcategory.topics.map((topic, index) => (
									<WBlock isBackground={false} key={index}>
										<TopicPreview
											topic={topic as FindAllTopicsQuery['findAllTopics'][0]}
										/>
										{index !== subcategory.topics.length - 1 && <Divider />}
									</WBlock>
								))}
							</WBlock>
						</WBlock>
					)
			)}
		</InfiniteScroll>
	)
}
