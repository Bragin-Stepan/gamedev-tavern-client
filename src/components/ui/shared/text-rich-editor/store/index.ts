import { create } from 'zustand'
import { shallow } from 'zustand/shallow'

import { generateId } from '@/utils/id-generator'

import { IEditorStore } from '../types'

import { TPostContentItem } from '@/types/post-item.type'

export const useEditorStore = create<IEditorStore>(set => ({
	title: '',
	items: [],
	setTitle: title => set({ title }),
	setItems: items => set({ items }),
	addItem: (index, type) =>
		set(state => {
			let newItem: TPostContentItem
			switch (type) {
				case 'paragraph':
					newItem = { id: generateId(), type: 'paragraph', content: '' }
					break
				case 'h2':
					newItem = { id: generateId(), type: 'h2', content: '' }
					break
				case 'h3':
					newItem = { id: generateId(), type: 'h3', content: '' }
					break
				case 'list':
					newItem = { id: generateId(), type: 'list', content: [''] }
					break
				case 'quote':
					newItem = { id: generateId(), type: 'quote', text: '', caption: '' }
					break
				case 'media':
					newItem = { id: generateId(), type: 'media', mediaType: 'image' }
					break
				case 'separator':
					newItem = { id: generateId(), type: 'separator' }
					break
				default:
					throw new Error(`Неизвестный тип блока: ${type}`)
			}

			const newItems = [
				...state.items.slice(0, index + 1),
				newItem,
				...state.items.slice(index + 1)
			]

			return { items: newItems }
		}),

	updateItem: newItem =>
		set(state => {
			const correctIndex = state.items.findIndex(item => item.id === newItem.id)
			if (correctIndex === -1) return state

			const newItems = [...state.items]
			newItems[correctIndex] = newItem

			return { items: newItems }
		}),
	removeItem: (id: string) =>
		set(state => {
			const newItems = state.items.filter(item => item.id !== id)
			return { items: newItems }
		}),
	resetData: () =>
		set(() => ({
			title: '',
			items: []
		})),
	shallow
}))
