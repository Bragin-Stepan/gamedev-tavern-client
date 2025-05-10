import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/common/button'
import { Typography } from '@/components/ui/common/typography'
import { WBlock } from '@/components/ui/shared/w-block'

export const CategoriesListGroup = () => {
	return (
		<WBlock>
			<div className='flex flex-row flex-wrap gap-x-4'>
				<Typography
					variant='h3'
					className='w-fit duration-200 hover:opacity-80'
				>
					<Link href='/category'>Графика</Link>
				</Typography>
				<Button variant='link' size='text' className='text-custom-brand'>
					2D
				</Button>
				<Button variant='link' size='text' className='text-custom-brand'>
					3D
				</Button>
				<Button variant='link' size='text' className='text-custom-brand'>
					Концепт-арт
				</Button>
				<Button variant='link' size='text' className='text-custom-brand'>
					Программирование
				</Button>
				<Button variant='link' size='text' className='text-custom-brand'>
					Анимация
				</Button>
			</div>

			<div className='flex flex-row flex-wrap gap-x-4'>
				<Typography variant='h3'>Проекты</Typography>
				<Button variant='link' size='text' className='text-custom-brand'>
					Релиз
				</Button>
				<Button variant='link' size='text' className='text-custom-brand'>
					Собираю команду
				</Button>
				<Button variant='link' size='text' className='text-custom-brand'>
					Ищу команду
				</Button>
			</div>

			<div className='flex flex-row flex-wrap gap-x-4'>
				<Typography variant='h3'>Unreal Engine</Typography>
				<Button variant='link' size='text' className='text-custom-brand'>
					Общее
				</Button>
				<Button variant='link' size='text' className='text-custom-brand'>
					C++
				</Button>
				<Button variant='link' size='text' className='text-custom-brand'>
					Арт
				</Button>
				<Button variant='link' size='text' className='text-custom-brand'>
					Blueprints
				</Button>
				<Button variant='link' size='text' className='text-custom-brand'>
					Физика
				</Button>
				<Button variant='link' size='text' className='text-custom-brand'>
					Анимация
				</Button>
				<Button variant='link' size='text' className='text-custom-brand'>
					Туториалы
				</Button>
			</div>
		</WBlock>
	)
}
