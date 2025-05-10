'use client'

import { useState } from 'react'

import { SubcategoriesGroupItem } from '@/components/features/subcategories/subcategories-group-item'
import { TopicPreview } from '@/components/features/topic/topic-preview'
import { Button } from '@/components/ui/common/button'
import { Divider } from '@/components/ui/common/divider'
import { Typography } from '@/components/ui/common/typography'
import { BlockTitle } from '@/components/ui/shared/block-title'
import { WBlock } from '@/components/ui/shared/w-block'

import { cn } from '@/utils/tailwind-merge'

export default function CategoryPage() {
	const [activeTab, setActiveTab] = useState(1)

	const subcategories = [
		{
			id: 1,
			name: 'Общее'
		},
		{
			id: 2,
			name: 'C++'
		},
		{
			id: 3,
			name: 'Blueprints'
		},
		{
			id: 4,
			name: 'Анимация'
		},
		{
			id: 5,
			name: 'Туториалы'
		}
	]

	return (
		<WBlock isBackground={false}>
			{/* <Typography variant='h1' className='w-fit py-2'>
				Unreal Engine
			</Typography> */}
			<WBlock>
				<BlockTitle title={'Unreal Engine'} />
				<Divider />
				<div className='flex flex-row gap-6'>
					{subcategories.map(subcategory => (
						<Button
							key={subcategory.id}
							size={'text'}
							variant={'link'}
							className={cn(
								activeTab === subcategory.id && 'text-custom-brand'
							)}
							onClick={() => setActiveTab(subcategory.id)}
						>
							{subcategory.name}
						</Button>
					))}
				</div>
			</WBlock>
			<WBlock>
				<TopicPreview />
			</WBlock>
			<WBlock>
				<TopicPreview />
			</WBlock>
			<WBlock>
				<TopicPreview />
			</WBlock>
			<WBlock>
				<TopicPreview />
			</WBlock>
			<WBlock>
				<TopicPreview />
			</WBlock>
		</WBlock>
	)
}
