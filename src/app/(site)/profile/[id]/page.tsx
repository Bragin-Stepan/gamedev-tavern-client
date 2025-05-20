'use client'

import { useState } from 'react'

import { ProjectCardList } from '@/components/features/project/project-card-list'
// import { SubcategoriesGroupItem } from '@/components/features/subcategories/subcategories-group-item'
import { UserCardFull } from '@/components/features/user/user-card/user-card-full'
import { UserProfileHeader } from '@/components/features/user/user-profile-header'
import { Button } from '@/components/ui/common/button'
import { ButtonsSwitcher } from '@/components/ui/shared/buttons-switcher'
import { WBlock } from '@/components/ui/shared/w-block'

export default function ProfilePage() {
	const [activeTab, setActiveTab] = useState('card')

	const items = [
		{ value: 'card', label: 'Карточка' },
		{ value: 'projects', label: 'Проекты' },
		{ value: 'topics', label: 'Темы' }
	]

	return (
		<WBlock isBackground={false}>
			<UserProfileHeader />
			<ButtonsSwitcher
				className='lg:my-2'
				items={items}
				activeTab={activeTab}
				onChange={setActiveTab}
			/>

			{activeTab === 'card' && <UserCardFull />}
			{activeTab === 'projects' && <ProjectCardList />}
			{/* {activeTab === 'topics' && <SubcategoriesGroupItem />} */}
		</WBlock>
	)
}
