'use client'

import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/common/button'
import { Typography } from '@/components/ui/common/typography'
import { WBlock } from '@/components/ui/shared/w-block'

import { useFindAllCategoriesQuery } from '@/graphql/generated/output'

export const CategoriesListGroup = () => {
	const { data, loading } = useFindAllCategoriesQuery()

	if (!data)
		return (
			<WBlock className='animate-pulse'>
				<div className='bg-custom-gray/10 h-6 w-1/4 rounded-full' />
				<div className='bg-custom-gray/10 h-6 w-1/5 rounded-full' />
				<div className='bg-custom-gray/10 h-6 w-1/4 rounded-full' />
				<div className='bg-custom-gray/10 h-6 w-1/6 rounded-full' />
				<div className='bg-custom-gray/10 h-6 w-1/5 rounded-full' />
			</WBlock>
		)

	return (
		<WBlock>
			{loading && <div className='h-30' />}
			{data.findAllCategories.map(category => (
				<div key={category.id} className='flex flex-wrap gap-x-4'>
					<Typography
						variant='h3'
						className='w-fit duration-200 hover:opacity-80'
					>
						<Link href={`/${category.slug}`}>{category.title}</Link>
					</Typography>

					{category.subcategories.map(subcategory => (
						<Button
							key={subcategory.id}
							variant='link'
							size='text'
							className='text-custom-brand'
						>
							<Link href={`/${category.slug}?sub=${subcategory.slug}`}>
								{subcategory.title}
							</Link>
						</Button>
					))}
				</div>
			))}
		</WBlock>
	)
}
