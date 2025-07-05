import Link from 'next/link'

import { Avatar } from '@/components/ui/common/avatar'
import { Badge } from '@/components/ui/common/badge'
import { Button } from '@/components/ui/common/button'
import { Typography } from '@/components/ui/common/typography'
import { GatheringTeamBadge } from '@/components/ui/shared/badges/gathering-team-badge'
import { LookingTeamBadge } from '@/components/ui/shared/badges/looking-team-badge'
import { SpecializationBadge } from '@/components/ui/shared/badges/specialization-badge'
import { DecorativeIconSpecialization } from '@/components/ui/shared/decorative-icon-specializations'
import { IconName } from '@/components/ui/shared/decorative-icon-specializations/icon.type'
import { WBlock } from '@/components/ui/shared/w-block'

import { FindProfileByUidQuery } from '@/graphql/generated/output'

interface Props {
	uid: number
	username: string | null | undefined
	avatar: string | null | undefined
	status: string | null | undefined
	specialization: FindProfileByUidQuery['findProfileByUid']['specialization']
	iconSpecialization: string | null | undefined
	isLookingTeam: boolean
	isGatheringTeam: boolean
}

export const UserProfileHeader = ({
	uid,
	username,
	avatar,
	status,
	iconSpecialization,
	specialization,
	isLookingTeam,
	isGatheringTeam
}: Props) => {
	return (
		<WBlock>
			<div className='flex flex-row items-center gap-3'>
				<Avatar className='h-14 w-14 lg:h-20 lg:w-20' />

				<div className='flex flex-col gap-0 lg:gap-1'>
					<div className='flex flex-row gap-1 lg:gap-2'>
						<Typography variant='h2'>{username ?? uid}</Typography>
						<Typography variant='body1' className='text-custom-brand'>
							UID: {uid}
						</Typography>
					</div>
					<div className='flex flex-row gap-1 lg:gap-2'>
						<SpecializationBadge
							title={specialization?.title}
							careerPath={specialization?.careerPath}
						/>

						{isGatheringTeam && !isLookingTeam && <GatheringTeamBadge />}
						{!isGatheringTeam && isLookingTeam && <LookingTeamBadge />}
					</div>
				</div>
			</div>

			{status && <Typography variant='body1'>{status}</Typography>}

			<div className='flex gap-5'>
				<Link href='#'>
					<Typography
						variant='subtitle2'
						className='text-custom-brand duration-200 hover:opacity-80'
					>
						Telegram
					</Typography>
				</Link>
				<Link href='#'>
					<Typography
						variant='subtitle2'
						className='text-custom-brand duration-200 hover:opacity-80'
					>
						VK
					</Typography>
				</Link>
			</div>

			<DecorativeIconSpecialization
				value={iconSpecialization as IconName}
				className='text-custom-gray/10 dark:text-custom-gray/7 absolute top-3 right-3 h-14 w-14 -rotate-10 lg:h-22 lg:w-22'
			/>
		</WBlock>
	)
}
