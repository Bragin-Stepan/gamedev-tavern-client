'use client'

import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { FaAnglesUp } from 'react-icons/fa6'
import { HiEyeOff } from 'react-icons/hi'
import { HiEye } from 'react-icons/hi'

import { Button } from '@/components/ui/common/button'
import { Form } from '@/components/ui/common/form'
import { Textarea } from '@/components/ui/common/textarea'
import { Typography } from '@/components/ui/common/typography'
import { InputForm } from '@/components/ui/shared/input-form'
import { TextRichEditor } from '@/components/ui/shared/text-rich-editor'
import { WBlock } from '@/components/ui/shared/w-block'

import { BlockTitle } from '../../../../ui/shared/block-title'

import { TPostContentItem } from '@/types/post-item.type'

type Link = {
	name: string
	url: string
}

//! Тестовые типы даных
type FormValues = {
	username: string
	direction: string
	discription: string
	information: TPostContentItem[]
	links: Link[]
}

export const SettingsCardForm = () => {
	const [links, setLinks] = useState<Link[]>([])
	const [currentLink, setCurrentLink] = useState<Link>({ name: '', url: '' })

	//! Имитация данных с сервера
	const dataInit = {
		gender: 'man',
		direction: '',
		discription: ''
	}

	const form = useForm<FormValues>({
		defaultValues: {
			username: '',
			direction: dataInit.direction,
			discription: '',
			links: [],
			information: []
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

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<WBlock isBackground={false}>
					<WBlock>
						<BlockTitle title={'Карточка кандидата'} />
					</WBlock>

					<div className='flex flex-row gap-2 lg:gap-3'>
						<Button
							type='button'
							className='bg-custom-gray/10 text-custom-brand'
							size={'lg'}
						>
							<FaAnglesUp size={16} className='text-custom-brand' />
							Поднять
						</Button>
						<Button
							type='button'
							variant={'ghost'}
							className='text-custom-access'
							size={'lg'}
						>
							<HiEye size={20} className='text-custom-access' />
							Активен
						</Button>
					</div>

					<WBlock title={'Основная информация'}>
						<InputForm
							label='Направление'
							name='direction'
							maxLength={24}
							placeholder='Unreal Engine Developer'
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
							label='Опыт'
							name='experience'
							maxLength={100}
							placeholder='7+ лет в создании игр и приложений для мобильных устройств'
							isTextarea
							className='min-h-18'
							type='text'
							rules={{
								maxLength: {
									value: 100,
									message: 'Максимум 100 символа'
								}
							}}
						/>

						<InputForm
							label='Описание'
							name='description'
							isTextarea
							className='min-h-24'
							maxLength={160}
							placeholder={
								'Уверенное владение Unreal Engine 5 (BP, C++, AI, UI) и Unity (UI, логика, анимация). Опыт разработки AI-систем, инвентарей, диалогов, интерактивных уровней и работа с анимацией.'
							}
							type='text'
							rules={{
								maxLength: {
									value: 160,
									message: 'Максимум 160 символа'
								}
							}}
						/>

						<InputForm
							label='Портфолио'
							name='portfolio'
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
					</WBlock>

					<WBlock title='Дополнительная информация'>
						<TextRichEditor
							onChangeValue={v => {
								form.setValue('information', v)
							}}
							excludeTypes={['media']}
							isTitle={false}
						/>
					</WBlock>

					<Button size={'lg'} className='w-fit' type='submit'>
						Сохранить
					</Button>
				</WBlock>
			</form>
		</Form>
	)
}
