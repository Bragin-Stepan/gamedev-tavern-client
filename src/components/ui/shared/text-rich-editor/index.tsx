'use client'

import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useEffect, useRef } from 'react'

import { cn } from '@/utils/tailwind-merge'

import { MenuBar } from './components/menu-bar'
import { SortedItems } from './components/sorted-items'
import { placeholderStyle } from './config/styles'
import { useControl } from './hooks/use-control'
import { useDragEndDrop } from './hooks/use-drag-end-drop'
import { useEditorStore } from './store'
import {
	TPostContent,
	TPostContentItem,
	TPostItemType
} from '@/types/post-item-types'

interface BaseProps {
	excludeTypes?: TPostItemType[]
}

interface NoTitleProps extends BaseProps {
	isTitle?: false
	onChangeValue: (content: TPostContentItem[]) => void
}

interface TitleProps extends BaseProps {
	isTitle?: true
	onChangeValue: (content: TPostContent) => void
}

type Props = TitleProps | NoTitleProps

export const TextRichEditor = ({
	onChangeValue,
	excludeTypes = [],
	isTitle = true
}: Props) => {
	const title = useEditorStore(state => state.title)
	const items = useEditorStore(state => state.items)
	const setTitle = useEditorStore(state => state.setTitle)
	const addItem = useEditorStore(state => state.addItem)
	const resetData = useEditorStore(state => state.resetData)

	const { handleDragEndDrop } = useDragEndDrop()
	const { heightConrol } = useControl()
	const inputTitleRef = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		heightConrol(inputTitleRef)

		return () => {
			resetData()
		}
	}, [])

	useEffect(() => {
		if (isTitle) {
			;(onChangeValue as TitleProps['onChangeValue'])({
				title: title || '',
				data: items
			})
		} else {
			;(onChangeValue as NoTitleProps['onChangeValue'])(items)
		}

		// Дефолтный элемент
		if (items.length === 0) {
			addItem(0, 'paragraph')
		}

		if (isTitle) {
			heightConrol(inputTitleRef)
		}
	}, [items, title, isTitle])

	return (
		<div className='w-full'>
			{isTitle && (
				<textarea
					value={title}
					ref={inputTitleRef}
					onChange={e => {
						setTitle(e.target.value)
						heightConrol(inputTitleRef)
					}}
					placeholder='Заголовок'
					className={cn(
						'text-custom-black h-8 w-full resize-none overflow-hidden pr-20 text-[21px] font-bold',
						placeholderStyle
					)}
					rows={1}
				/>
			)}
			<DndContext
				collisionDetection={closestCenter}
				onDragEnd={handleDragEndDrop}
			>
				<SortableContext items={items} strategy={verticalListSortingStrategy}>
					<SortedItems items={items} excludeTypes={excludeTypes} />
				</SortableContext>
			</DndContext>
			<div className='mt-2 flex flex-row flex-wrap items-center justify-end gap-4 sm:justify-between'>
				<MenuBar excludeTypes={excludeTypes} />
			</div>
		</div>
	)
}
