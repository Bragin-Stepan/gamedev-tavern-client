'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

import { Button } from '@/components/ui/common/button'
import { Typography } from '@/components/ui/common/typography'
import { WBlock } from '@/components/ui/shared/w-block'

interface AuthFormWrapperProps {
	title: string
	children: React.ReactNode
}

export const AuthFormWrapper = ({ title, children }: AuthFormWrapperProps) => {
	const router = useRouter()

	const onClickBack = () => {
		console.log(123123)
		router.back()
	}

	return (
		<WBlock className='w-md lg:px-14 lg:py-12'>
			<div className='relative mb-6 flex w-full flex-row justify-center'>
				<Button
					variant={'link'}
					size={'icon'}
					className='text-custom-black absolute -top-0.5 -left-2 z-10'
					onClick={() => onClickBack()}
				>
					<IoIosArrowBack size={24} />
				</Button>
				<Typography variant='h1' className='uppercase'>
					{title}
				</Typography>
			</div>

			{children}
		</WBlock>
	)
}
