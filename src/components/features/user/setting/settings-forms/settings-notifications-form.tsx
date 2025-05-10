'use client'

import React from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/common/button'
import { Form } from '@/components/ui/common/form'
import { CheckboxLabel } from '@/components/ui/shared/checkbox-label'
import { WBlock } from '@/components/ui/shared/w-block'

import { BlockTitle } from '../../../../ui/shared/block-title'

export const SettingsNotificationsForm = () => {
	const form = useForm({
		defaultValues: {
			mailComment: true,
			mailMention: false,
			mailMessage: false,
			mailPostAnswer: true,
			mailRate: false,
			siteComment: true,
			siteMention: true,
			siteMessage: false,
			sitePostAnswer: false,
			siteRate: false
		}
	})

	const onSubmit = () => {
		console.log('Submitted data:', form.getValues())
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<WBlock isBackground={false}>
					<WBlock>
						<BlockTitle title={'Уведомления'} />
					</WBlock>
					<WBlock title='Письма на почту'>
						<CheckboxLabel
							name='mailPostAnswer'
							title={'Ответы на мои публикации'}
						/>
						<CheckboxLabel
							name='mailMention'
							title={'Упоминания в публикациях'}
						/>
						<CheckboxLabel
							name='mailComment'
							title={'Новые комментарии к моим публикациям'}
						/>
						<CheckboxLabel name='mailMessage' title={'Новые сообщения'} />
						<CheckboxLabel
							name='mailRate'
							title={'Оценки публикаций и комментариев'}
						/>
					</WBlock>
					<WBlock title='Уведомления на сайте'>
						<CheckboxLabel
							name='sitePostAnswer'
							title={'Ответы на мои публикации'}
						/>
						<CheckboxLabel
							name='siteMention'
							title={'Упоминания в публикациях'}
						/>
						<CheckboxLabel
							name='siteComment'
							title={'Новые комментарии к моим публикациям'}
						/>
						<CheckboxLabel name='siteMessage' title={'Новые сообщения'} />
						<CheckboxLabel
							name='siteRate'
							title={'Оценки публикаций и комментариев'}
						/>
					</WBlock>
					<Button size={'lg'} className='w-fit'>
						Сохранить
					</Button>
				</WBlock>
			</form>
		</Form>
	)
}
