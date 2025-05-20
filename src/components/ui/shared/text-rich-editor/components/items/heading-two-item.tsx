'use client'

import React, { useRef } from 'react'

import { cn } from '@/utils/tailwind-merge'

import { placeholderStyle } from '../../config/styles'
import { useKeys } from '../../hooks/use-keys'
import { useEditorStore } from '../../store'

import { IPostHeadingTwoItem } from '@/types/post-item.type'

export const HeadingTwoItem = React.memo(
	({
		id,
		item,
		index
	}: {
		id: string
		item: IPostHeadingTwoItem
		index: number
	}) => {
		const updateItem = useEditorStore(state => state.updateItem)
		const { handleKeyDown } = useKeys(index, id, item)
		const inputRef = useRef<HTMLInputElement>(null)

		return (
			<input
				ref={inputRef}
				data-index={index}
				value={item.content}
				onChange={e => {
					const newContent = e.target.value
					updateItem({ ...item, content: newContent })
				}}
				onKeyDown={handleKeyDown}
				className={cn(
					'text-custom-black w-full rounded text-[20px] font-bold',
					placeholderStyle
				)}
				placeholder='Заголовок H2'
			/>
		)
	}
)
