import { notFound } from 'next/navigation'

import { CategoryOverview } from '@/components/features/categories/category-overview'
import { WBlock } from '@/components/ui/shared/w-block'

import {
	FindOneCategoryDocument,
	type FindOneCategoryQuery
} from '@/graphql/generated/output'

import { SERVER_URL } from '@/libs/constants/url.constants'

async function findOneCategory(params: { category: string }) {
	try {
		const query = FindOneCategoryDocument.loc?.source.body
		const variables = { slug: params.category }

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
			category: data.data
				.findOneCategory as FindOneCategoryQuery['findOneCategory']
		}
	} catch (error) {
		console.log(error)
		return notFound()
	}
}

export default async function CategoryPage(props: {
	params: Promise<{ category: string }>
}) {
	const params = await props.params

	const { category } = await findOneCategory(params)

	return (
		<WBlock isBackground={false}>
			<CategoryOverview category={category} />
		</WBlock>
	)
}
