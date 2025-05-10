'use client'

import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { FaPlus } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

import { Button } from '@/components/ui/common/button'
import { Form } from '@/components/ui/common/form'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/common/select'
import { Typography } from '@/components/ui/common/typography'
import { InputForm } from '@/components/ui/shared/input-form'
import { WBlock } from '@/components/ui/shared/w-block'

import { useCurrent } from '@/hooks/use-current'

import { BlockTitle } from '../../../../ui/shared/block-title'

type Link = {
	name: string
	url: string
}

//! Тестовые типы даных
type FormValues = {
	username: string
	direction: string
	discription: string
	links: Link[]
}

export const SettingsBlogForm = () => {
	const [links, setLinks] = useState<Link[]>([])
	const [currentLink, setCurrentLink] = useState<Link>({ name: '', url: '' })
	const { user } = useCurrent()

	const form = useForm<FormValues>({
		defaultValues: {
			username: user?.username || '',
			direction: '',
			discription: '',
			links: []
		}
	})

	const onSubmit = (data: FormValues) => {
		console.log('Submitted data:', data)
	}

	const handleAddLink = () => {
		if (links.length >= 3) return
		if (currentLink.name && currentLink.url) {
			setLinks([...links, currentLink])
			setCurrentLink({ name: '', url: '' })
			form.setValue('links', [...links, currentLink])
		}
	}

	const handleRemoveLink = (index: number) => {
		const newLinks = links.filter((_, i) => i !== index)
		setLinks(newLinks)
		form.setValue('links', newLinks)
	}

	const direction = [
		{
			id: '1',
			name: '2D Художник'
		},
		{
			id: '2',
			name: '3D Художник'
		},
		{
			id: '3',
			name: '2D Аниматор'
		},
		{
			id: '4',
			name: '3D Аниматор'
		},
		{
			id: '5',
			name: 'UI/UX Дизайнер'
		},
		{
			id: '6',
			name: 'Программист'
		},
		{
			id: '7',
			name: 'Геймдизайнер'
		},
		{
			id: '8',
			name: 'Нерративный дизайнер'
		},
		{
			id: '9',
			name: 'Менеджер'
		},
		{
			id: '10',
			name: 'Саунд-дизайнер'
		},
		{
			id: '11',
			name: 'Сценарист'
		},
		{
			id: '12',
			name: 'Тестировщик'
		}
	]

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<WBlock isBackground={false}>
					<WBlock>
						<BlockTitle title={'Блог'} />
					</WBlock>

					<WBlock title='О себе'>
						<InputForm
							label='Имя'
							name='username'
							maxLength={24}
							placeholder='Свиборг'
							type='text'
							rules={{
								required: 'Это поле обязательно',
								maxLength: {
									value: 24,
									message: 'Максимум 24 символа'
								}
							}}
						/>

						<InputForm
							label='О себе'
							name='description'
							maxLength={60}
							placeholder='Ламопочка перестает работать когда перегорит...'
							type='text'
							rules={{
								maxLength: {
									value: 60,
									message: 'Максимум 60 символа'
								}
							}}
						/>

						<Controller
							name='direction'
							control={form.control}
							render={({ field }) => (
								<div>
									<Typography
										variant='body1'
										className='text-custom-black mb-2'
									>
										Направление
									</Typography>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<SelectTrigger className='w-full'>
											<SelectValue placeholder='' />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												{direction.map(item => (
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

						<div className='space-y-3'>
							<Typography variant='body1' className='text-custom-black mb-2'>
								Ссылки
							</Typography>
							{links.map((link, index) => (
								<div key={index} className='flex items-center gap-2'>
									<div className='w-fit'>
										<Typography
											variant='body1'
											className='text-custom-brand font-bold'
										>
											{link.name}
										</Typography>
										<Typography variant='body2' className='text-custom-gray'>
											{link.url}
										</Typography>
									</div>
									<Button
										type='button'
										variant='link'
										onClick={() => handleRemoveLink(index)}
									>
										<IoClose className='text-custom-error' size={24} />
									</Button>
								</div>
							))}

							{links.length < 3 && (
								<div className='flex w-full flex-row space-x-3'>
									<InputForm
										name='linkName'
										value={currentLink.name}
										onChange={e =>
											setCurrentLink({ ...currentLink, name: e.target.value })
										}
										placeholder='Название ссылки'
										type='text'
										className='w-full'
										rules={{
											maxLength: {
												value: 30,
												message: 'Максимум 30 символов'
											}
										}}
									/>
									<InputForm
										name='linkUrl'
										value={currentLink.url}
										onChange={e =>
											setCurrentLink({ ...currentLink, url: e.target.value })
										}
										placeholder='https://example.com'
										type='url'
										className='w-full'
										rules={{
											pattern: {
												value:
													/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
												message: 'Введите корректный URL'
											}
										}}
									/>
									<Button
										type='button'
										size='lg'
										className='h-12 w-12'
										onClick={handleAddLink}
										disabled={!currentLink.name || !currentLink.url}
									>
										<FaPlus />
									</Button>
								</div>
							)}
						</div>
					</WBlock>

					<Button size={'lg'} className='w-fit' type='submit'>
						Сохранить
					</Button>
				</WBlock>
			</form>
		</Form>
	)
}
