import React from 'react'
import { HiMiniEye } from 'react-icons/hi2'

import { Typography } from '../common/typography'

export const ViewCount = ({ count }: { count: number }) => {
	return (
		<div className='flex items-center gap-2'>
			<HiMiniEye className='text-custom-gray/70' size={20} />
			<Typography variant='body1' className='text-custom-gray'>
				{count ?? 0}
			</Typography>
		</div>
	)
}
