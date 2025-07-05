'use client'

import Link from 'next/link'
import React from 'react'

import {
	FindAllTopicsQuery,
	FindProfileByUidQuery
} from '@/graphql/generated/output'

import { useCurrent } from '@/hooks/use-current'

import { Avatar } from './../common/avatar'
import { Button } from './../common/button'
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger
} from './../common/hover-card'
import { Typography } from './../common/typography'
import { GatheringTeamBadge } from './badges/gathering-team-badge'
import { LookingTeamBadge } from './badges/looking-team-badge'
import { SpecializationBadge } from './badges/specialization-badge'
import { DecorativeIconSpecialization } from './decorative-icon-specializations'
import { IconName } from './decorative-icon-specializations/icon.type'

interface AuthorProps {
	// author?: FindAllTopicsQuery['findAllTopics'][0]['author']
	// author?: FindProfileByUidQuery['findProfileByUid']
	id: string
	uid: string
	avatar: string
	username: string
	status: string
	isLookingTeam: boolean
	isGatheringTeam: boolean
	iconSpecialization: IconName
	specialization: {
		title: string
	}
	socialLinks: {
		title: string
		url: string
	}[]
	candidateCard: {
		direction: string
	}
	createdAt: string
	updatedAt: string
}

export const Author = ({ author }: { author: AuthorProps }) => {
	// if (!author) return null
	const { user } = useCurrent()

	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<Link
					className='flex w-fit items-center gap-2 lg:gap-3'
					href={author?.uid ? `/profile/${author.uid}` : '#'}
				>
					<Avatar className='h-13 w-13' />
					<div className='flex flex-col gap-1'>
						<Typography variant='body1' className='dark:opacity-100'>
							{author?.username ?? 'Аккаунт недоступен'}
						</Typography>

						<div className='flex flex-row gap-2'>
							<SpecializationBadge title={author?.specialization?.title} />

							{!author?.isLookingTeam && author?.isGatheringTeam && (
								<GatheringTeamBadge />
							)}

							{!author?.isGatheringTeam && author?.isLookingTeam && (
								<LookingTeamBadge />
							)}
						</div>
					</div>
				</Link>
			</HoverCardTrigger>
			<HoverCardContent
				className='flex w-fit max-w-90 flex-col gap-1 lg:max-w-100 lg:min-w-90 lg:gap-2'
				align='start'
				sideOffset={-16}
			>
				<Link
					className='flex w-fit items-center gap-2 lg:gap-3'
					href='/profile/1'
				>
					{author?.specialization && (
						<DecorativeIconSpecialization
							value={author.specialization.title as IconName}
							className='text-custom-gray/10 dark:text-custom-gray/7 absolute top-2 right-3 h-14 w-14 -rotate-10 lg:h-16 lg:w-16'
						/>
					)}
					<Avatar className='h-13 w-13' />
					<div className='flex flex-col gap-1'>
						<div className='flex flex-row items-center gap-1'>
							<Typography variant='body1' className='dark:opacity-100'>
								{author?.username ?? 'Аккаунт недоступен'}
							</Typography>
							{/* <Badge className='bg-custom-black text-custom-white'>
								UID: {author.uid}
							</Badge> */}
							<Typography variant='body2' className='text-custom-brand pr-4'>
								UID: {author?.uid ?? '777'}
							</Typography>
						</div>

						<div className='flex flex-row gap-2'>
							<SpecializationBadge title={author?.specialization?.title} />

							{!author?.isLookingTeam && author?.isGatheringTeam && (
								<GatheringTeamBadge />
							)}

							{!author?.isGatheringTeam && author?.isLookingTeam && (
								<LookingTeamBadge />
							)}
						</div>
					</div>
				</Link>
				{author?.candidateCard && (
					<Typography variant='body1'>
						{author.candidateCard.direction}
					</Typography>
				)}
				<Typography variant='body2' className='-mt-1'>
					{author?.status}
				</Typography>

				<div className='my-1 -mt-1 flex flex-row gap-2 lg:gap-3'>
					{author?.socialLinks?.length > 0 &&
						author.socialLinks.map(link => (
							<Button key={link.title} variant={'link'} size={'text'}>
								{link.title}
							</Button>
						))}
				</div>
				{user?.id !== author?.id && <Button size={'sm'}>Подписаться</Button>}
			</HoverCardContent>
		</HoverCard>
	)
}
