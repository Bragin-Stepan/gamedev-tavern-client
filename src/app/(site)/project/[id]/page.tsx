import { CommentList } from '@/components/features/comments/comment-list'
import { ProjectCardFull } from '@/components/features/project/project-card-full'
import { WBlock } from '@/components/ui/shared/w-block'

export default function ProjectPage() {
	return (
		<WBlock isBackground={false}>
			<ProjectCardFull />
			<CommentList />
		</WBlock>
	)
}
