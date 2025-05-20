import React from 'react'

import { HeadingThreeItem } from '../items/heading-three-item'
import { HeadingTwoItem } from '../items/heading-two-item'
import { ListItem } from '../items/list-item'
import { MediaItem } from '../items/media-item'
import { ParagraphItem } from '../items/paragraph-item'
import { QuoteItem } from '../items/quote-item'
import { SeparatorItem } from '../items/separator-item'

import { SortableItem } from './components/sortable-item'
import { TPostContentItem, TPostItemType } from '@/types/post-item.type'

type Props = {
	excludeTypes?: TPostItemType[]
	items: TPostContentItem[]
}

/**
 * Отсортированные элементы
 * @param items - элементы
 * @param excludeTypes - типы элементов, которые нужно исключить
 */
export const SortedItems = ({ items, excludeTypes }: Props) => {
	const renderItem = (item: TPostContentItem, index: number) => {
		if (excludeTypes?.includes(item.type)) return null

		switch (item.type) {
			case 'paragraph':
				return <ParagraphItem item={item} index={index} id={item.id} />
			case 'h2':
				return <HeadingTwoItem item={item} index={index} id={item.id} />
			case 'h3':
				return <HeadingThreeItem item={item} index={index} id={item.id} />
			case 'list':
				return <ListItem item={item} index={index} id={item.id} />
			case 'quote':
				return <QuoteItem item={item} />
			case 'separator':
				return <SeparatorItem />
			case 'media':
				return <MediaItem item={item} index={index} />
			default:
				return null
		}
	}

	return items.map((item, index) => (
		<SortableItem key={item.id} id={item.id} item={item}>
			{renderItem(item, index)}
		</SortableItem>
	))
}
