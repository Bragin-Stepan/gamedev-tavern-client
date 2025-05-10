'use client'

import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { IoClose } from 'react-icons/io5'

import { Button } from '@/components/ui/common/button'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/common/select'
import { Typography } from '@/components/ui/common/typography'
import { BlockTitle } from '@/components/ui/shared/block-title'
import { TextRichEditor } from '@/components/ui/shared/text-rich-editor'
import { WBlock } from '@/components/ui/shared/w-block'

import { TPostContent } from '@/types/post-item-types'

export const TopicEditForm = () => {
	const [data, setData] = useState<TPostContent>({
		title: '',
		data: []
	})

	const form = useForm<any>({
		defaultValues: {
			categories: '',
			subcategories: ''
		}
	})

	const categories = [
		{ id: '1', name: 'Category 1' },
		{ id: '2', name: 'Category 2' }
	]

	const subcategories = [
		{ id: '1', name: 'subcategory 1' },
		{ id: '2', name: 'subcategory 2' }
	]

	const handleSave = () => {
		console.log('Saved data:', data)
	}

	return (
		<WBlock isBackground={false}>
			<WBlock>
				<BlockTitle title={'Создать тему'} />
			</WBlock>

			<WBlock>
				<TextRichEditor onChangeValue={(v: TPostContent) => setData(v)} />

				<div className='flex w-full flex-row gap-2 lg:gap-3'>
					<Controller
						name='category'
						control={form.control}
						render={({ field }) => (
							<div className='flex w-fit flex-row gap-2'>
								{/* <Typography variant='body1' className='text-custom-black mb-2'>
								Категория
							</Typography> */}
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<SelectTrigger className='w-full'>
										<SelectValue placeholder='Категория' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											{categories.map(item => (
												<SelectItem key={item.id} value={item.id}>
													{item.name}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
						)}
					/>

					{form.watch('category') && (
						<Controller
							name='subcategory'
							control={form.control}
							render={({ field }) => (
								<div className='flex w-fit flex-row gap-2'>
									{/* <Typography variant='body1' className='text-custom-black mb-2'>
								Подкатегория
							</Typography> */}
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<SelectTrigger className='w-full'>
											<SelectValue placeholder='Подкатегория' />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												{subcategories.map(item => (
													<SelectItem key={item.id} value={item.id}>
														{item.name}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
							)}
						/>
					)}
				</div>
			</WBlock>

			<div className='flex flex-wrap justify-between'>
				<div className='flex flex-row gap-2 lg:gap-3'>
					<Controller
						name='subcategory'
						control={form.control}
						render={({ field }) => (
							<div className='flex w-fit flex-row gap-2'>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<SelectTrigger className='w-full'>
										<SelectValue placeholder='Добавить проект' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											{subcategories.map(item => (
												<SelectItem key={item.id} value={item.id}>
													{item.name}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
						)}
					/>
					<Button
						size={'text'}
						variant={'link'}
						type='button'
						onClick={() => {}}
					>
						<IoClose size={24} className='text-custom-error' />
					</Button>
				</div>
				<Button size={'lg'} className='w-fit' onClick={handleSave}>
					{'Опубликовать'}
				</Button>
			</div>
		</WBlock>
	)
}
