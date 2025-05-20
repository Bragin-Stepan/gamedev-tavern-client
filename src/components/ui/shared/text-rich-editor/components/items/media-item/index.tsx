'use client'

import React, { useCallback, useRef, useState } from 'react'
import { FaImage } from 'react-icons/fa6'

import { cn } from '@/utils/tailwind-merge'

import { placeholderStyle } from '../../../config/styles'
import { useEditorStore } from '../../../store'

import { useHandle } from './hooks/use-handle'
import { IPostMediaItem } from '@/types/post-item.type'

export const MediaItem = React.memo(
	({ item, index }: { item: IPostMediaItem; index: number }) => {
		const updateItem = useEditorStore(state => state.updateItem)
		const fileInputRef = useRef<HTMLInputElement>(null)
		const [isDragging, setIsDragging] = useState(false)

		const {
			handleInputChange,
			handleDrop,
			handleDragOver,
			handleDragEnter,
			handleDragLeave
		} = useHandle(setIsDragging, index, item)

		const openFilePicker = useCallback(() => {
			if (fileInputRef.current) {
				fileInputRef.current.click()
			}
		}, [])

		return (
			<div
				className='w-full rounded-lg'
				onDragOver={handleDragOver}
				onDrop={handleDrop}
				onDragEnter={handleDragEnter}
				onDragLeave={handleDragLeave}
			>
				{/* Плейсхолдер или предварительный просмотр изображения */}
				{item.url ? (
					<img
						src={item.url}
						alt='Preview'
						className='mt-1 aspect-video w-full rounded-xl object-cover'
					/>
				) : (
					<div
						onClick={openFilePicker}
						className={cn(
							'border-custom-gray/30 flex h-46 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-dashed duration-200',
							isDragging && 'bg-custom-gray/10'
						)}
					>
						{/* Иконка загрузки картинки */}
						<FaImage
							className={cn(
								'text-custom-gray/30 animate-bounce transition-colors duration-1000',
								isDragging && 'text-custom-gray/60'
							)}
							size={34}
						/>
					</div>
				)}

				{/* Скрытый input для выбора файла */}
				<input
					type='file'
					accept='image/*'
					ref={fileInputRef}
					onChange={handleInputChange}
					style={{ display: 'none' }}
				/>

				{/* Подпись к изображению */}
				<input
					value={item.caption || ''}
					onChange={e => {
						updateItem({ ...item, caption: e.target.value })
					}}
					placeholder='Подпись'
					className={cn('text-custom-gray mt-2 w-full', placeholderStyle)}
				/>
			</div>
		)
	}
)
