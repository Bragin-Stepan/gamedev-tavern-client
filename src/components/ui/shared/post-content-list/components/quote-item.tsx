import React from 'react'

import { Typography } from '@/components/ui/common/typography'

import { IPostQuoteItem } from '@/types/post-item.type'

interface Props {
	item: IPostQuoteItem
}

export const QuoteItem = ({ item }: Props) => {
	return (
		<blockquote className='border-custom-gray border-l-2 pl-4 italic'>
			<Typography variant='body1'>{item.text}</Typography>
			{item.caption && (
				<Typography variant='body2' className='mt-2'>
					— {item.caption}
				</Typography>
			)}
		</blockquote>
	)
}
