'use client'

import { AsideBase } from './components/aside-base'
import { Banner } from './components/banner'
import { Contacts } from './components/contacts'
import { Login } from './components/login'
import { PopularProjects } from './components/popular-projects'
import { PopularTopics } from './components/popular-topics'
import { useHiddenAside } from './hooks/use-hidden-aside'

export const AsideRight = () => {
	const { shouldHide } = useHiddenAside()

	if (shouldHide) {
		return null
	}

	return (
		<AsideBase>
			<Login />
			<PopularProjects />
			<PopularTopics />
			<div className='sticky top-22 z-10 flex flex-col gap-2 duration-300 lg:gap-3'>
				{/* <div className='bg-custom-white h-40 rounded-xl shadow'>
					Контекстная реклама
				</div> */}
				<Banner />
				<Contacts />
			</div>
		</AsideBase>
	)
}
