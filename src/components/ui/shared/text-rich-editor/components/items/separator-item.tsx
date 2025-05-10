'use client'

import React from 'react'

import { Divider } from '@/components/ui/common/divider'

export const SeparatorItem = React.memo(() => {
	return (
		<div className='flex w-full items-center justify-center'>
			<Divider />
		</div>
	)
})
