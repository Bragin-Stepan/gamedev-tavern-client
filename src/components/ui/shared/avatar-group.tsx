import React from 'react'

import { Avatar } from '../common/avatar'

export const AvatarGroup = () => {
	return (
		<div className='flex -space-x-2'>
			<Avatar className='ring-custom-white ring-3' />
			<Avatar className='ring-custom-white ring-3' />
			<Avatar className='ring-custom-white ring-3' />
		</div>
	)
}
