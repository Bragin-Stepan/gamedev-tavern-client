import React from 'react'

import { Divider } from '@/components/ui/common/divider'
import { WBlock } from '@/components/ui/shared/w-block'

import { UserCardPreview } from './user-card-preview'

export const UserCardList = () => {
	return (
		<WBlock isBackground={false}>
			<WBlock>
				<UserCardPreview />
			</WBlock>
			<WBlock>
				<UserCardPreview />
			</WBlock>
			<WBlock>
				<UserCardPreview />
			</WBlock>
		</WBlock>
	)
}
