'use client'

import { useState } from 'react'

import { ProjectCardList } from '@/components/features/project/project-card-list'
import { SubcategoriesGroupItem } from '@/components/features/subcategories/subcategories-group-item'
import { UserCardFull } from '@/components/features/user/user-card/user-card-full'
import { UserProfileHeader } from '@/components/features/user/user-profile-header'
import { ButtonsSwitcher } from '@/components/ui/shared/buttons-switcher'
import { WBlock } from '@/components/ui/shared/w-block'

import { useFindProfileByUidQuery } from '@/graphql/generated/output'

export const UserProfile = ({ uid }: { uid: number }) => {
	const [activeTab, setActiveTab] = useState('card')

	const items = [
		{ value: 'card', label: 'Карточка' },
		{ value: 'projects', label: 'Проекты' },
		{ value: 'topics', label: 'Темы' }
	]

	const { data } = useFindProfileByUidQuery({
		variables: {
			uid: Number(uid)
		}
	})

	if (!data) return null

	const user = data.findProfileByUid

	return (
		<WBlock isBackground={false}>
			<UserProfileHeader
				uid={user.uid}
				username={user.username}
				avatar={user.avatar}
				status={user.status}
				specialization={user.specialization}
				iconSpecialization={user.iconSpecialization}
				isLookingTeam={user.isLookingTeam}
				isGatheringTeam={user.isGatheringTeam}
			/>
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
