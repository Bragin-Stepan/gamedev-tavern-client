import React from 'react'

import { Typography } from '@/components/ui/common/typography'

import {
	IPostHeadingThreeItem,
	IPostHeadingTwoItem,
	IPostParagraphItem
} from '@/types/post-item.type'

interface Props {
	item: IPostParagraphItem | IPostHeadingTwoItem | IPostHeadingThreeItem
}

export const ParagraphItem = ({ item }: Props) => {
	switch (item.type) {
		case 'paragraph':
			return <Typography variant='body1'>{item.content}</Typography>
		case 'h2':
			return <Typography variant='h2'>{item.content}</Typography>
		case 'h3':
			return <Typography variant='h3'>{item.content}</Typography>
		default:
			return null
	}
}
