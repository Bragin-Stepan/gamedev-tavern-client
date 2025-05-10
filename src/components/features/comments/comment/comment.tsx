'use client'

import React, { useState } from 'react'

import { ThreeDotsButton } from '@/components/features/topic/topic-preview/components/three-dots-button'
import { Button } from '@/components/ui/common/button'
import { Textarea } from '@/components/ui/common/textarea'
import { Typography } from '@/components/ui/common/typography'
import { Author } from '@/components/ui/shared/author'
import { WBlock } from '@/components/ui/shared/w-block'

import { AnswerForm } from './components/answer-form'

interface CommentProps {
	authorName: string
	content: string
	timeAgo: string
	isNested?: boolean
	children?: React.ReactNode
}

export const Comment = ({
	authorName,
	content,
	timeAgo,
	isNested = false,
	children
}: CommentProps) => {
	const [showReplyForm, setShowReplyForm] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	const hasChildren = Boolean(children)

	return (
		<WBlock isBackground={false}>
			{isNested && (
				<div className='absolute top-0 -left-6 h-6 w-4 rounded-bl-xl border-b-2 border-l-2 border-neutral-200 dark:border-neutral-800' />
			)}

			<div className='flex flex-row items-center justify-between'>
				<Author />
			</div>
			<Typography variant='body1'>{content}</Typography>

			<div className='flex flex-row items-center justify-between'>
				<div className='-mt-2 -mb-1 flex flex-row items-center gap-4'>
					{hasChildren && (
						<Button
							variant='link'
							size='text'
							onClick={() => setIsOpen(!isOpen)}
						>
							{isOpen ? 'Свернуть' : 'Показать'}
						</Button>
					)}
					<AnswerForm />
					<ThreeDotsButton />
				</div>

				<Typography className='text-custom-gray-dark'>{timeAgo}</Typography>
			</div>

			{hasChildren && isOpen && (
				<div className='relative space-y-2 pt-4 pl-6 lg:space-y-4'>
					{React.Children.map(children, (child, index) => {
						const isLast = index === React.Children.count(children) - 1
						return (
							<div className={isLast ? 'relative' : ''}>
								{!isLast && (
									<div
										className='absolute top-0 left-0 w-px border-l-2 border-neutral-200 dark:border-neutral-800'
										style={{
											height: `calc(100% - 8rem)`
										}}
									/>
								)}
								{child}
							</div>
						)
					})}
				</div>
			)}
		</WBlock>
	)
}
