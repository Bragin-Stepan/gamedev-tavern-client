'use client'

import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { IoClose } from 'react-icons/io5'
import { toast } from 'sonner'

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

import {
	useCreateTopicMutation,
	useFindAllCategoriesQuery
} from '@/graphql/generated/output'

import { TPostContent } from '@/types/post-item.type'

export const TopicEditForm = () => {
	const [data, setData] = useState<TPostContent>({
		title: '',
		data: []
	})

	const { data: categoriesData, loading } = useFindAllCategoriesQuery()

	const form = useForm<any>({
		defaultValues: {
			category: '',
			subcategory: ''
		}
	})

	const selectedCategoryId = form.watch('category')

	const selectedCategory = categoriesData?.findAllCategories.find(
		c => c.id === selectedCategoryId
	)

	const subcategories = selectedCategory?.subcategories || []

	const [create, { loading: isLoading }] = useCreateTopicMutation({
		onCompleted: () => {
			toast.success('Тема успешно создана')
		},
		onError: error => {
			toast.error(error.message)
		}
	})

	const onSubmit = () => {
		create({
			variables: {
				data: {
					title: data.title,
					contentBlocks: data.data,
					subcategoryId: form.getValues('subcategory')
				}
			}
		})
	}

	const handleSave = () => {
		console.log('title ==> ', data.title)
		console.log('contentBlocks ==> ', data.data)
		console.log('subcategory ==> ', form.getValues('subcategory'))
		console.log('attachedProjectId ==> ')
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
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<SelectTrigger className='w-full'>
										<SelectValue placeholder='Категория' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											{categoriesData?.findAllCategories.map(item => (
												<SelectItem key={item.id} value={item.id}>
													{item.title}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
						)}
					/>

					{selectedCategoryId && (
						<Controller
							name='subcategory'
							control={form.control}
							render={({ field }) => (
								<div className='flex w-fit flex-row gap-2'>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
										value={field.value}
									>
										<SelectTrigger className='w-full'>
											<SelectValue placeholder='Подкатегория' />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												{subcategories.length > 0 ? (
													subcategories.map(item => (
														<SelectItem key={item.id} value={item.id}>
															{item.title}
														</SelectItem>
													))
												) : (
													<Typography
														variant='body2'
														className='text-custom-black/50 px-4 py-2'
													>
														Нет подкатегорий
													</Typography>
												)}
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
									value={field.value}
								>
									<SelectTrigger className='w-full'>
										<SelectValue placeholder='Добавить проект' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											{subcategories.map(item => (
												<SelectItem key={item.id} value={item.id}>
													{item.title}
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
				<Button size={'lg'} className='w-fit' onClick={onSubmit}>
					{'Опубликовать'}
				</Button>
			</div>
		</WBlock>
	)
}
