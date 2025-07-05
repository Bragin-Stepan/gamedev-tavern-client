import React from 'react'
import { BsChatLeftDotsFill } from 'react-icons/bs'
import { FaComment } from 'react-icons/fa'

import { Typography } from '../common/typography'

export const CommentsCount = ({ count }: { count: number }) => {
	return (
		<div className='flex items-center gap-2'>
			<FaComment className='text-custom-gray/70' size={16} />
			<Typography variant='body1' className='text-custom-gray'>
				{count ?? 0}
				{/* <span className='text-custom-brand'>5+ </span>12 */}
			</Typography>
		</div>
	)
}
