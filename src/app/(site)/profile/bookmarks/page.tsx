import { ProjectCardPreview } from '@/components/features/project/project-card-preview'
import { TopicPreview } from '@/components/features/topic/topic-preview'
import { WBlock } from '@/components/ui/shared/w-block'

export default function BookmarksPage() {
	return (
		<WBlock isBackground={false}>
			<WBlock>
				<ProjectCardPreview />
			</WBlock>

			<WBlock>
				<TopicPreview />
			</WBlock>
		</WBlock>
	)
}
