import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { FaGripLines, FaTrash } from 'react-icons/fa'

import { cn } from '@/utils/tailwind-merge'

import { useEditorStore } from '../../../store'

import { TPostContentItem } from '@/types/post-item.type'

export const SortableItem = ({
	id,
	children,
	item
}: {
	id: string
	children: React.ReactNode
	item: TPostContentItem
}) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging
	} = useSortable({ id })
	const { removeItem } = useEditorStore()
	const style = { transform: CSS.Transform.toString(transform), transition }

	const isSeparator = item.type === 'separator'

	return (
		<div
			className={cn(
				'flex items-center gap-2 rounded-md',
				isSeparator ? '-my-1' : 'py-1.5',
				'active:z-50'
			)}
			style={style}
			// ref={setNodeRef}
		>
			<div
				className={cn(
					'flex min-h-6 w-full overflow-hidden',
					isDragging && 'scale-75 opacity-70 duration-300'
				)}
			>
				{children}
			</div>

			<button
				ref={setNodeRef}
				type='button'
				{...attributes}
				{...listeners}
				className={cn(
					'hover:bg-custom-gray-light group flex cursor-grab items-center rounded p-2 hover:animate-pulse',
					isDragging && 'scale-90 duration-600'
				)}
			>
				<FaGripLines className='text-custom-gray' />
			</button>

			<button
				onClick={() => removeItem(id)}
				onDragStart={event => event.preventDefault()}
				onDragOver={event => event.stopPropagation()}
				type='button'
				className='hover:bg-custom-error/20 cursor-pointer rounded p-2 duration-100 hover:animate-pulse'
			>
				<FaTrash className='text-custom-error' />
			</button>
		</div>
	)
}
