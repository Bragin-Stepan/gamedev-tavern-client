'use client'

import { FaRegImages } from 'react-icons/fa6'
import { IoIosList } from 'react-icons/io'
import { LuHeading2, LuHeading3 } from 'react-icons/lu'
import { RiDoubleQuotesL } from 'react-icons/ri'
import { TbTextPlus } from 'react-icons/tb'
import { TbSeparator } from 'react-icons/tb'

import { Button } from '@/components/ui/common/button'

import { useEditorStore } from '../store'

import { TPostItemType } from '@/types/post-item.type'

type Props = {
	excludeTypes?: TPostItemType[]
}

export const MenuBar = ({ excludeTypes = [] }: Props) => {
	const { addItem, items } = useEditorStore()

	const buttons = [
		{ icon: TbTextPlus, type: 'paragraph' },
		{ icon: LuHeading2, type: 'h2' },
		{ icon: LuHeading3, type: 'h3' },
		{ icon: IoIosList, type: 'list' },
		{ icon: RiDoubleQuotesL, type: 'quote' },
		{ icon: TbSeparator, type: 'separator' },
		{ icon: FaRegImages, type: 'media' }
	]

	return (
		<div className='-ml-2 flex gap-2'>
			{buttons.map(({ icon: Icon, type }: any, index) => {
				if (excludeTypes.includes(type)) return null

				return (
					<Button
						key={index}
						variant={'link'}
						size={'icon'}
						type='button'
						className='text-custom-gray'
						onClick={() => addItem(items.length, type)}
					>
						<Icon size={24} />
					</Button>
				)
			})}
		</div>
	)
}
