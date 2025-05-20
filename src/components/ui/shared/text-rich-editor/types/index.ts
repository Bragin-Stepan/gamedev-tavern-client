import { TPostContentItem, TPostItemType } from '@/types/post-item.type'

export interface IEditorStore {
	title: string
	items: TPostContentItem[]
	setTitle: (title: string) => void
	setItems: (items: TPostContentItem[]) => void
	addItem: (index: number, type: TPostItemType) => void
	updateItem: (item: TPostContentItem) => void
	removeItem: (id: string) => void
	resetData: () => void
}
