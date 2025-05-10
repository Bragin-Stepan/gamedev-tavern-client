import { CommentList } from '@/components/features/comments/comment-list'
import { TopicFull } from '@/components/features/topic/topic-full'
import { WBlock } from '@/components/ui/shared/w-block'

export default function TopicPage() {
	return (
		<WBlock isBackground={false}>
			<TopicFull />
			<CommentList />
		</WBlock>
	)
}
