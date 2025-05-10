import React from 'react'

import { cn } from '@/utils/tailwind-merge'

type Props = {
	isMounted: boolean
	linkRefs: React.RefObject<Record<number, HTMLAnchorElement | null>>
	activeId: number
}

export const Indicator = ({ isMounted, linkRefs, activeId }: Props) => {
	return (
		<div
			className={cn(
				'absolute bottom-0 h-[2px] rounded transition-all duration-200 ease-in-out',
				isMounted ? 'bg-custom-brand' : 'bg-transparent'
			)}
			style={{
				width: '20px',
				left: isMounted ? linkRefs.current[activeId]?.offsetLeft || 0 : 0,
				transform: `translateX(${
					(isMounted ? linkRefs.current[activeId]?.offsetWidth || 5 : 5) / 2 -
					10
				}px)`
			}}
		/>
	)
}
