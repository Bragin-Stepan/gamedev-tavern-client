import { ProjectEditForm } from '@/components/features/project/project-edit-form'
import { TopicFull } from '@/components/features/topic/topic-full'
import { WBlock } from '@/components/ui/shared/w-block'

export default function ProjectEditPage() {
	return (
		<WBlock isBackground={false}>
			<ProjectEditForm />
		</WBlock>
	)
}
