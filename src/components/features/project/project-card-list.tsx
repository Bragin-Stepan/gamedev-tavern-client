import React from 'react'

import { Divider } from '@/components/ui/common/divider'
import { WBlock } from '@/components/ui/shared/w-block'

import { ProjectCardFull } from './project-card-full'
import { ProjectCardPreview } from './project-card-preview'

export const ProjectCardList = () => {
	return (
		<WBlock isBackground={false}>
			<WBlock>
				<ProjectCardPreview />
			</WBlock>
			<WBlock>
				<ProjectCardPreview />
			</WBlock>
			<WBlock>
				<ProjectCardPreview />
			</WBlock>
		</WBlock>
	)
}
