import { UserProfile } from '@/components/features/user/user-profile'

export default async function ProfilePage(props: {
	params: Promise<{ uid: number }>
}) {
	const params = await props.params

	return <UserProfile uid={params.uid} />
}
