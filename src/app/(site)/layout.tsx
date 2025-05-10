import type { Metadata } from 'next'

import { AsideRight } from '@/components/layout/aside-right'
import { Header } from '@/components/layout/header'

export const metadata: Metadata = {
	title: 'GameDev Таверна',
	description: 'Сайт про разработку игр'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header />
			<main className='bg-custom-gray-light relative h-full min-h-screen pb-40'>
				<div className='mx-auto max-w-[1280px] rounded-2xl py-4'>
					<div className='mx-auto flex max-w-7xl flex-row px-2 sm:px-4 md:gap-2 md:px-4 lg:gap-3 xl:px-6 2xl:px-0'>
						<div className='w-full'>{children}</div>
						<AsideRight />
					</div>
				</div>
			</main>
		</>
	)
}
