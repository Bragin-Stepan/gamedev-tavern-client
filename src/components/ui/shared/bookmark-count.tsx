import React from 'react'
import { PiBookmark } from 'react-icons/pi'
import { PiBookmarkFill } from 'react-icons/pi'

import { Typography } from '../common/typography'

export const BookmarkCount = () => {
	return (
		<div className='flex items-center gap-2'>
			{/* <PiBookmarkFill className='text-custom-error' size={20} /> */}
			<PiBookmarkFill className='text-custom-gray/70' size={20} />
			<Typography variant='body1' className='text-custom-gray'>
				12
			</Typography>
		</div>
	)
}
