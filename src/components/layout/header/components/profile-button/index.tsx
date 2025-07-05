'use client'

import { useAuth } from '@/hooks/use-auth'

import { ProfileMenu } from './profile-menu'

export const ProfileButton = () => {
	const { isAuthenticated } = useAuth()

	return isAuthenticated && <ProfileMenu />
}
