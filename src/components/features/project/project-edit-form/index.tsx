'use client'

import React from 'react'

import { Button } from '@/components/ui/common/button'
import { BlockTitle } from '@/components/ui/shared/block-title'
import { TextRichEditor } from '@/components/ui/shared/text-rich-editor'
import { WBlock } from '@/components/ui/shared/w-block'

export const ProjectEditForm = () => {
	return (
		<WBlock isBackground={false}>
			<WBlock>
				<BlockTitle title={'Создать проект'} />
			</WBlock>

			<WBlock title='О проекте'>
				Картинки (Обяз)
				<br /> Название (Обяз)
				<br /> Жанр (Обяз)
				<br /> Платформы (Обяз)
				<br /> Движок (Обяз)
				<br /> Описание (Обяз)
				<br /> О проекте / Текст рич
			</WBlock>

			<WBlock title='Дополнительно'>
				<TextRichEditor isTitle={false} onChangeValue={v => console.log(v)} />
			</WBlock>

			<Button size={'lg'} className='w-fit' onClick={() => {}}>
				{'Опубликовать'}
			</Button>

			<WBlock isBackground={false}>
				Картинки (Обяз)
				<br /> Название (Обяз)
				<br /> Жанр (Обяз)
				<br /> Платформы (Обяз)
				<br /> Движок (Обяз)
				<br /> Описание (Обяз)
				<br /> О проекте / Текст рич
			</WBlock>
		</WBlock>
	)
}
