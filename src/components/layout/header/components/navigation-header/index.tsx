'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/common/button'
import { Typography } from '@/components/ui/common/typography'

import { cn } from '@/utils/tailwind-merge'

import { pages } from '../../config/pages'

import { Indicator } from './components/indicator'

export const NavigationHeader = () => {
	const pathname = usePathname()
	const [activeId, setActiveId] = useState<number>(0)
	const linkRefs = useRef<Record<number, HTMLAnchorElement | null>>({})
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		const activePage = pages.find(page => page.path === pathname)
		setActiveId(activePage?.id || 0)
	}, [pathname])

	useEffect(() => {
		setIsMounted(true)
	}, [])

	return (
		<div className='relative hidden flex-grow md:flex'>
			{/* Ссылки */}
			<div className='flex'>
				{pages.map(page => {
					const isActive = pathname === page.path

					return (
						<Link
							href={page.path}
							key={page.id}
							ref={el => (linkRefs.current[page.id] = el)}
							className='relative'
						>
							<Button variant={'link'} className='px-4'>
								<Typography
									variant='subtitle2'
									className={cn(
										'flex h-7 items-center',
										isActive ? 'text-white' : 'text-white/50'
									)}
								>
									{page.title}
								</Typography>
							</Button>
						</Link>
					)
				})}
			</div>

			{/* Анимированная полоска */}
			{Boolean(activeId) && (
				<Indicator
					activeId={activeId}
					isMounted={isMounted}
					linkRefs={linkRefs}
				/>
			)}
		</div>
	)
}
