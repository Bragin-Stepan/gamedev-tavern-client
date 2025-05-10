import React from 'react'
import { FaSearch } from 'react-icons/fa'

import { Button } from '@/components/ui/common/button'

export const HeaderSearchButton = () => {
	return (
		<Button size={'icon'} variant={'link'}>
			<FaSearch className='text-custom-gray' />
		</Button>
	)
}
