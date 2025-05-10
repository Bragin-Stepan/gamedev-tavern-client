'use client'

import { Loader } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

import { Typography } from '@/components/ui/common/typography'

import { useVerifyAccountMutation } from '@/graphql/generated/output'

import { useAuth } from '@/hooks/use-auth'

export function VerifyAccountForm() {
	const { auth } = useAuth()

	const router = useRouter()
	const searchParams = useSearchParams()

	const token = searchParams.get('token') ?? ''

	const [verify] = useVerifyAccountMutation({
		onCompleted() {
			auth()
			toast.success('Аккаунт успешно подтвержден')
			router.push('/')
		},
		onError() {
			toast.error('Ошибка при подтверждении аккаунта')
		}
	})

	useEffect(() => {
		verify({
			variables: {
				data: { token }
			}
		})
	}, [token])

	return (
		<div className='flex flex-col items-center gap-6 p-8'>
			<Typography variant='h2'>Идет подтверждение аккаунта</Typography>
			<Loader className='size-8 animate-spin' />
		</div>
	)
}
