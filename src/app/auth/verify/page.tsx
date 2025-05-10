import { redirect } from 'next/navigation'

import { VerifyAccountForm } from '@/components/features/auth/form/verify-form'

export default async function VerifyProfilePage(props: {
	searchParams: Promise<{ token: string }>
}) {
	const searchParams = await props.searchParams

	if (!searchParams.token) {
		return redirect('/auth/login')
	}

	return <VerifyAccountForm />
}
