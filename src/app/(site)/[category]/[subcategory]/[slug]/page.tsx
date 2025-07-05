import { notFound } from 'next/navigation'

import { CommentList } from '@/components/features/comments/comment-list'
import { TopicFull } from '@/components/features/topic/topic-full'
import { WBlock } from '@/components/ui/shared/w-block'

import {
	FindTopicBySlugDocument,
	type FindTopicBySlugQuery
} from '@/graphql/generated/output'

import { SERVER_URL } from '@/libs/constants/url.constants'

async function findTopic(params: { slug: string }) {
	try {
		const query = FindTopicBySlugDocument.loc?.source.body
		const variables = { slug: params.slug }

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
			topic: data.data
				.findTopicBySlug as FindTopicBySlugQuery['findTopicBySlug']
		}
	} catch (error) {
		console.log(error)
		return notFound()
	}
}

export default async function TopicSlugPage(props: {
	params: Promise<{ slug: string }>
}) {
	const params = await props.params

	const { topic } = await findTopic(params)

	if (!topic) {
		return notFound()
	}

	return (
		<WBlock isBackground={false}>
			<TopicFull topic={topic} />
			{<CommentList contentId={topic.id} />}
		</WBlock>
	)
}
