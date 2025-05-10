import React from 'react'

import { Typography } from '../common/typography'

import { WBlock } from './w-block'

export const WorkInProgress = () => {
	return (
		<WBlock className='z-5 lg:pt-30 lg:pb-30'>
			<div className='border-custom-gray/30 flex h-10 w-full rotate-10 items-center justify-evenly rounded-xl border-2 bg-amber-400 shadow-xl'>
				<Typography variant='h2' className='text-black'>
					В разработке
				</Typography>
				<Typography variant='h2' className='text-black'>
					В разработке
				</Typography>
				<Typography variant='h2' className='text-black'>
					В разработке
				</Typography>
			</div>
			<div className='border-custom-gray/30 absolute mb-12 flex h-10 w-full -rotate-5 items-center justify-evenly rounded-xl border-2 bg-amber-400 shadow-xl'>
				<Typography variant='h2' className='text-black'>
					В разработке
				</Typography>
				<Typography variant='h2' className='text-black'>
					В разработке
				</Typography>
				<Typography variant='h2' className='text-black'>
					В разработке
				</Typography>
				<Typography variant='h2' className='text-black'>
					В разработке
				</Typography>
			</div>
		</WBlock>
	)
}
