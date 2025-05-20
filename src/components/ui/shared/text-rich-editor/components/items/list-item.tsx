'use client'

import React, { useRef } from 'react'

import { cn } from '@/utils/tailwind-merge'

import { placeholderStyle } from '../../config/styles'
import { useEditorStore } from '../../store'

import { IPostListItem } from '@/types/post-item.type'

export const ListItem = React.memo(
	({ item, index, id }: { item: IPostListItem; index: number; id: string }) => {
		const updateItem = useEditorStore(state => state.updateItem)
		const removeItem = useEditorStore(state => state.removeItem)

		console.log(item)

		const handleKeyDown = (e: React.KeyboardEvent, itemIndex: number) => {
			if (e.key === 'Enter') {
				e.preventDefault()
				const newContent = [...item.content]
				newContent.splice(itemIndex + 1, 0, '')
				updateItem({ ...item, content: newContent })
				setTimeout(() => {
					const nextInput = document.querySelector(
						`[data-index="${index}"] [data-item-index="${itemIndex + 1}"]`
					) as HTMLInputElement
					if (nextInput) nextInput.focus()
				}, 0)
			} else if (e.key === 'Backspace' && item.content[itemIndex] === '') {
				e.preventDefault()
				if (item.content.length > 1) {
					const newContent = item.content.filter(
						(_: any, i: number) => i !== itemIndex
					)
					updateItem({ ...item, content: newContent })
					setTimeout(() => {
						const prevInput = document.querySelector(
							`[data-index="${index}"] [data-item-index="${itemIndex - 1}"]`
						) as HTMLInputElement
						if (prevInput) prevInput.focus()
					}, 0)
				} else {
					removeItem(id)
					setTimeout(() => {
						const prevItemInput = document.querySelector(
							`[data-index="${index - 1}"]`
						) as HTMLInputElement
						if (prevItemInput) prevItemInput.focus()
					}, 0)
				}
			}
		}

		return (
			<ul
				className='flex w-full list-disc flex-col gap-1 pl-5'
				data-index={index}
			>
				{item.content.map((contentItem: string, itemIndex: number) => (
					<li key={itemIndex}>
						<input
							data-item-index={itemIndex}
							value={contentItem}
							onChange={e => {
								const newContent = [...item.content]
								newContent[itemIndex] = e.target.value
								updateItem({ ...item, content: newContent })
							}}
							onKeyDown={e => handleKeyDown(e, itemIndex)}
							className={cn(
								'text-custom-black w-full rounded',
								placeholderStyle
							)}
							placeholder='Элемент списка'
						/>
					</li>
				))}
			</ul>
		)
	}
)
