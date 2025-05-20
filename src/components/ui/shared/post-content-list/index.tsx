import React from 'react'

import { WBlock } from '../w-block'

import { ListItem } from './components/list-item'
import { MediaItem } from './components/media-item'
import { ParagraphItem } from './components/paragraph-item'
import { QuoteItem } from './components/quote-item'
import { SeparatorItem } from './components/separator-item'
import { TPostContentItem } from '@/types/post-item.type'

interface Props {
	items: TPostContentItem[]
	isShort?: boolean
}

export const PostContentList = ({ items, isShort = false }: Props) => {
	if (!Array.isArray(items)) return null

	const shortItems = []
	let firstParagraphFound = false
	let firstMediaFound = false

	for (const item of items) {
		if (!firstParagraphFound && ['paragraph', 'h2', 'h3'].includes(item.type)) {
			shortItems.push(item)
			firstParagraphFound = true
		} else if (
			firstParagraphFound &&
			!firstMediaFound &&
			item.type === 'media' &&
			['image', 'gif', 'video'].includes(item.mediaType)
		) {
			shortItems.push(item)
			firstMediaFound = true
		} else if (isShort && firstParagraphFound && firstMediaFound) {
			break
		} else if (!isShort) {
			shortItems.push(item)
		}
	}

	return (
		<WBlock isBackground={false}>
			{shortItems.map(item => {
				switch (item.type) {
					case 'paragraph':
					case 'h2':
					case 'h3':
						return <ParagraphItem key={item.id} item={item} />

					case 'list':
						return <ListItem key={item.id} item={item} />

					case 'quote':
						return <QuoteItem key={item.id} item={item} />

					case 'separator':
						return <SeparatorItem key={item.id} />

					case 'media':
						return <MediaItem key={item.id} item={item} />

					default:
						return null
				}
			})}
		</WBlock>
	)
}
