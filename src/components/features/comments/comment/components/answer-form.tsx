import React, { useState } from 'react'

import { Button } from '@/components/ui/common/button'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/common/popover'
import { Textarea } from '@/components/ui/common/textarea'

interface AnswerFormProps {}

export const AnswerForm = () => {
	const [open, setOpen] = useState(false)

	const onCancel = () => {
		setOpen(false)
	}

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button variant='link' size='text' className='text-custom-gray'>
					Ответить
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-sm lg:w-120' align='start'>
				<div className='space-y-2 lg:space-y-3'>
					<Textarea placeholder='Ваш ответ...' className='min-h-30' />
					<div className='flex gap-2'>
						<Button type='submit'>Отправить</Button>
						<Button
							variant='ghost'
							className='bg-custom-brand/10 text-custom-brand'
							onClick={() => onCancel()}
						>
							Отмена
						</Button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}
