import Link from 'next/link'

import { CategoriesListGroup } from '@/components/features/categories/categories-list-group'
import { SubcategoriesGroupItem } from '@/components/features/subcategories/subcategories-group-item'
import { Typography } from '@/components/ui/common/typography'
import { WBlock } from '@/components/ui/shared/w-block'

export default async function Home() {
	return (
		<WBlock isBackground={false}>
			<CategoriesListGroup />

			<Typography
				variant='h2'
				className='w-fit py-2 duration-200 hover:opacity-80'
			>
				<Link href='/category'>Оцените</Link>
			</Typography>
			<SubcategoriesGroupItem />
			<Typography
				variant='h2'
				className='w-fit py-2 duration-200 hover:opacity-80'
			>
				<Link href='/category'>Оцените</Link>
			</Typography>
			<SubcategoriesGroupItem />
		</WBlock>
	)
}
