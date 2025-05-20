'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { Button } from '@/components/ui/common/button'
import { Divider } from '@/components/ui/common/divider'
import { BlockTitle } from '@/components/ui/shared/block-title'
import { WBlock } from '@/components/ui/shared/w-block'

import { FindOneCategoryQuery } from '@/graphql/generated/output'

import { cn } from '@/utils/tailwind-merge'

import { TopicsList } from '../topic/topics-list'

interface CategoryOverviewProps {
	category: FindOneCategoryQuery['findOneCategory']
}

export const CategoryOverview = ({ category }: CategoryOverviewProps) => {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const router = useRouter()

	const [activeSubcategory, setActiveSubcategory] = useState<{
		id: string
		slug: string
		title: string
	} | null>(null)

	useEffect(() => {
		const subParam = searchParams.get('sub')

		if (!subParam) {
			setActiveSubcategory(null)
			return
		}

		const subcategory = category.subcategories.find(sc => sc.slug === subParam)

		if (subcategory) {
			setActiveSubcategory(subcategory)
		} else {
			setActiveSubcategory(null)
		}
	}, [searchParams, category])

	const handleTabClick = (slug: string) => {
		const newSearchParams = new URLSearchParams(searchParams.toString())

		if (slug === 'all') {
			newSearchParams.delete('sub')
		} else {
			newSearchParams.set('sub', slug)
		}

		router.replace(`${pathname}?${newSearchParams.toString()}`)
	}

	return (
		<WBlock isBackground={false}>
			<WBlock>
				<BlockTitle title={category.title} />
				<Divider />

				<div className='flex flex-row gap-6 px-2'>
					<Button
						size='text'
						variant='link'
						className={cn(
							!searchParams.get('sub')
								? 'text-custom-brand'
								: 'text-custom-black'
						)}
						onClick={() => handleTabClick('all')}
					>
						Все
					</Button>

					{category.subcategories.map(subcategory => (
						<Button
							key={subcategory.id}
							size='text'
							variant='link'
							className={cn(
								activeSubcategory?.id === subcategory.id
									? 'text-custom-brand'
									: 'text-custom-black'
							)}
							onClick={() => handleTabClick(subcategory.slug)}
						>
							{subcategory.title}
						</Button>
					))}
				</div>
			</WBlock>

			<TopicsList
				categoryId={category.id}
				subcategoryId={activeSubcategory?.id || null}
			/>
		</WBlock>
	)
}
