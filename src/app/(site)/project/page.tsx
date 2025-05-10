'use client'

import { useState } from 'react'

import { ProjectCardList } from '@/components/features/project/project-card-list'
import { UserCardList } from '@/components/features/user/user-card/user-card-list'
import { ButtonsSwitcher } from '@/components/ui/shared/buttons-switcher'
import { WBlock } from '@/components/ui/shared/w-block'

export default function ProjectsPage() {
	const [activeTab, setActiveTab] = useState('all')

	const items = [
		{ value: 'all', label: 'Все' },
		{ value: 'find-specialists', label: 'Ищут специалистов' },
		{ value: 'projects', label: 'Релиз' },
		{ value: 'find-team', label: 'Ищут команду' }
	]

	return (
		<WBlock isBackground={false}>
			<ButtonsSwitcher
				className='lg:mb-2'
				items={items}
				activeTab={activeTab}
				onChange={setActiveTab}
			/>

			{activeTab === 'all' && <ProjectCardList />}
			{activeTab === 'find-specialists' && <ProjectCardList />}
			{activeTab === 'projects' && <ProjectCardList />}
			{activeTab === 'find-team' && <UserCardList />}
		</WBlock>
	)
}
