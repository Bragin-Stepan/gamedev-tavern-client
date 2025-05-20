import { useCallback } from 'react'

import { useEditorStore } from '../../../../store'

import { IPostMediaItem } from '@/types/post-item.type'

export const useHandle = (
	setIsDragging: (state: boolean) => void,
	index: number,
	item: IPostMediaItem
) => {
	const updateItem = useEditorStore(state => state.updateItem)

	/** Обработчик загрузки файла */
	const handleFileUpload = useCallback((file: File) => {
		const reader = new FileReader()
		reader.onload = () => {
			updateItem({ ...item, url: reader.result as string })
			setIsDragging(false)
		}
		reader.onerror = () => {
			console.error('Ошибка при чтении файла')
			updateItem({ ...item, url: null })
			setIsDragging(false)
		}
		reader.readAsDataURL(file)
	}, [])

	/** Обработчик загрузки файла */
	const handleInputChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const file = e.target.files?.[0]
			if (file) {
				handleFileUpload(file)
			}
		},
		[]
	)

	/** Обработчик перетаскивания файла */
	const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDragging(false)
		const file = e.dataTransfer.files?.[0]
		if (file) {
			handleFileUpload(file)
		}
	}, [])

	/** Обработчик перетаскивания на самой странице */
	const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
	}, [])

	const handleDragEnter = useCallback(() => {
		setIsDragging(true)
	}, [])

	const handleDragLeave = useCallback(() => {
		setIsDragging(false)
	}, [])

	return {
		handleInputChange,
		handleDrop,
		handleDragOver,
		handleDragEnter,
		handleDragLeave
	}
}
