import { CategoriesListGroup } from '@/components/features/categories/categories-list-group'
import { SubcategoriesGroupItem } from '@/components/features/subcategories/subcategories-group-item'
import { WBlock } from '@/components/ui/shared/w-block'

import {
	FindPopularSubcategoriesDocument,
	FindPopularSubcategoriesQuery
} from '@/graphql/generated/output'

import { SERVER_URL } from '@/libs/constants/url.constants'

async function findPopularCategories() {
	try {
		const query = FindPopularSubcategoriesDocument.loc?.source.body
		const variables = {
			pagination: {}
		}

		const response = await fetch(SERVER_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ query, variables }),
			next: {
				revalidate: 30
			}
		})

		const data = await response.json()

		return {
			subcategories: data.data
				.findPopularSubcategories as FindPopularSubcategoriesQuery['findPopularSubcategories']
		}
	} catch (error) {
		console.log(error)
		throw new Error('Ошибка при получении популярных категорий')
	}
}

export default async function Home() {
	const { subcategories } = await findPopularCategories()

	return (
		<WBlock isBackground={false}>
			<CategoriesListGroup />

			<SubcategoriesGroupItem subcategories={subcategories} />
		</WBlock>
	)
}
