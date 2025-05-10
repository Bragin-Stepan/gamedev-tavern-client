'use client'

import React, { useCallback } from 'react'
import { IoIosArrowBack } from 'react-icons/io'

import { Button } from '@/components/ui/common/button'
import { Typography } from '@/components/ui/common/typography'

import { navigateToBack } from '@/utils/navigate'

type Props = {
	title: string
	isArrow?: boolean
}

export const BlockTitle = ({ title, isArrow = true }: Props) => {
	const onClickBack = useCallback(() => {
		navigateToBack()
	}, [])
	return (
		<div className='flex flex-row items-center justify-between'>
			<div className='flex h-8 flex-row items-center gap-2'>
				{isArrow && (
					<Button
						variant={'link'}
						size={'icon'}
						type='button'
						className='text-custom-black -ml-2'
						onClick={onClickBack}
					>
						<IoIosArrowBack size={24} />
					</Button>
				)}
				<Typography variant='h2' className='text-center'>
					{title}
				</Typography>
			</div>
		</div>
	)
}
