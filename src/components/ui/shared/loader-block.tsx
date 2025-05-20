import React from 'react'

import { Loader } from '../common/loader'

import { WBlock } from './w-block'

export const LoaderBlock = () => {
	return (
		<WBlock className='h-20 items-center justify-center'>
			<Loader variant='spinner' />
		</WBlock>
	)
}
