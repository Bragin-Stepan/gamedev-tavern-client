import React from 'react'

import { CreateHeaderButton } from './components/create-header-button'
import { HamburgerMenu } from './components/hamburger-menu'
import { HeaderNotificationsButton } from './components/header-notifications-button'
import { HeaderSearchButton } from './components/header-search-button'
import { LogoHeader } from './components/logo-header'
import { NavigationHeader } from './components/navigation-header'
import { ProfileButton } from './components/profile-button'

export const Header = () => {
	return (
		<div className='sticky top-0 z-50 flex items-center justify-between space-x-2 bg-black/94 px-4 py-4 shadow-sm backdrop-blur-md md:px-4 lg:px-7 dark:bg-black/90'>
			<LogoHeader className='hidden md:flex' />
			<HamburgerMenu />
			<NavigationHeader />
			<LogoHeader variant='md' className='hidden sm:flex md:hidden' />
			<div className='flex flex-row items-center gap-2 lg:gap-3'>
				<HeaderSearchButton />
				{/* <HeaderNotificationsButton /> */}
				<CreateHeaderButton />
				<ProfileButton />
			</div>
		</div>
	)
}
