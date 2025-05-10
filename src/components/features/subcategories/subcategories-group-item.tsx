import React from 'react'

import { Divider } from '@/components/ui/common/divider'
import { WBlock } from '@/components/ui/shared/w-block'

import { TopicPreview } from '../topic/topic-preview'

export const SubcategoriesGroupItem = () => {
	return (
		<WBlock>
			<TopicPreview />
			<Divider />
			<TopicPreview />
			<Divider />
			<TopicPreview />
		</WBlock>
	)
}
