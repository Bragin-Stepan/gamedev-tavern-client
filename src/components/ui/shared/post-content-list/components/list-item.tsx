import React from 'react'

import { Typography } from '@/components/ui/common/typography'

import { IPostListItem } from '@/types/post-item.type'

interface Props {
	item: IPostListItem
}

export const ListItem = ({ item }: Props) => {
	return (
		<ul className='list-disc pl-5'>
			{item.content.map((line, index) => (
				<li key={index}>
					<Typography variant='body1'>{line}</Typography>
				</li>
			))}
		</ul>
	)
}
