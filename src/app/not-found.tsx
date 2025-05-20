import Link from 'next/link'

import { Button } from '@/components/ui/common/button'
import { Typography } from '@/components/ui/common/typography'

export default async function NotFoundPage() {
	return (
		<div className='flex h-full w-full flex-col items-center justify-center'>
			<div className='px-4 py-10 text-center sm:px-6 lg:px-8'>
				<Typography
					variant='h1'
					className='text-foreground block text-7xl font-bold sm:text-9xl'
				>
					404
				</Typography>
				<Typography className='text-muted-foreground mt-3'>Ошибка</Typography>
				<Link
					href='/'
					className='mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3'
				>
					<Button variant='secondary'>Назад</Button>
				</Link>
			</div>
		</div>
	)
}
