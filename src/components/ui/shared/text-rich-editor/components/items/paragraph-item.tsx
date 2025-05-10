'use client'

import React, { useEffect, useRef } from 'react'

import { cn } from '@/utils/tailwind-merge'

import { placeholderStyle } from '../../config/styles'
import { useControl } from '../../hooks/use-control'
import { useKeys } from '../../hooks/use-keys'
import { useEditorStore } from '../../store'

import { IPostParagraphItem } from '@/types/post-item-types'

export const ParagraphItem = React.memo(
	({
		id,
		item,
		index
	}: {
		id: string
		item: IPostParagraphItem
		index: number
	}) => {
		const updateItem = useEditorStore(state => state.updateItem)
		const { handleKeyDown } = useKeys(index, id, item)
		const { heightConrol } = useControl()
		const inputRef = useRef<HTMLTextAreaElement>(null)

		useEffect(() => {
			heightConrol(inputRef)
		}, [item.content])

		return (
			<textarea
				ref={inputRef}
				data-index={index}
				value={item.content}
				onChange={e => {
					const newContent = e.target.value
					updateItem({ ...item, content: newContent })
					heightConrol(inputRef)
				}}
				onKeyDown={handleKeyDown}
				className={cn(
					'text-custom-black w-full resize-none overflow-hidden rounded text-base',
					placeholderStyle
				)}
				placeholder='Начните печатать...'
				rows={1}
			/>
		)
	}
)
