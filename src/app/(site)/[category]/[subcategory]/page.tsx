'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function SubcategoryRedirectPage({
	params
}: {
	params: Promise<{ category: string; subcategory: string }>
}) {
	const router = useRouter()

	useEffect(() => {
		;(async () => {
			const resolvedParams = await params

			const { category, subcategory } = resolvedParams

			router.replace(`/${category}?sub=${subcategory}`)
		})()
	}, [router])

	return null
}
