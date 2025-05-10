'use client'

import React, { useEffect, useRef } from 'react'
import { RiDoubleQuotesL } from 'react-icons/ri'

import { cn } from '@/utils/tailwind-merge'

import { placeholderStyle } from '../../config/styles'
import { useControl } from '../../hooks/use-control'
import { useEditorStore } from '../../store'

import { IPostQuoteItem } from '@/types/post-item-types'

export const QuoteItem = React.memo(({ item }: { item: IPostQuoteItem }) => {
	const updateItem = useEditorStore(state => state.updateItem)
	const { heightConrol } = useControl()
	const inputRef = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		heightConrol(inputRef)
	}, [item])

	return (
		<div className='bg-custom-gray/10 relative flex w-full flex-row gap-5 overflow-hidden rounded-md'>
			<RiDoubleQuotesL
				size={30}
				className='text-custom-gray/30 absolute top-2 right-2'
			/>
			<div className='bg-custom-brand relative h-full w-1' />
			<div className='flex w-full flex-col gap-1 py-2 pr-8'>
				<textarea
					value={item.text}
					onChange={e => {
						updateItem({ ...item, text: e.target.value })
						heightConrol(inputRef)
					}}
					className={cn(
						'h-4 w-full resize-none overflow-hidden rounded text-base',
						placeholderStyle
					)}
					placeholder='Текст цитаты'
					ref={inputRef}
					rows={1}
				/>
				<input
					value={item.caption}
					onChange={e => {
						updateItem({ ...item, caption: e.target.value })
					}}
					className={cn(
						'text-custom-gray-dark w-full rounded text-sm',
						placeholderStyle
					)}
					placeholder='Подпись'
				/>
			</div>
		</div>
	)
})
