import Image from 'next/image'
import React from 'react'

import { Typography } from '@/components/ui/common/typography'

import { IPostMediaItem } from '@/types/post-item.type'

interface Props {
	item: IPostMediaItem
}

export const MediaItem = ({ item }: Props) => {
	if (item.mediaType === 'image' && item.url) {
		return (
			<div className='my-4'>
				<Image
					src={item.url}
					alt={item.caption || ''}
					width={800}
					height={400}
				/>
				{item.caption && (
					<Typography
						variant='body2'
						className='text-custom-gray mt-1 text-center'
					>
						{item.caption}
					</Typography>
				)}
			</div>
		)
	}

	if (item.mediaType === 'gallery' && item.items?.length) {
		return (
			<div className='my-4 grid grid-cols-2 gap-2'>
				{item.items.map((img, idx) => (
					<div key={idx} className='flex flex-col items-center'>
						<Image
							src={img.url}
							alt={img.caption || ''}
							width={600}
							height={400}
						/>
						{img.caption && (
							<Typography variant='body2' className='mt-1 text-center'>
								{img.caption}
							</Typography>
						)}
					</div>
				))}
			</div>
		)
	}

	if (item.mediaType === 'video' && item.url) {
		return (
			<div className='my-4'>
				<video src={item.url} controls className='h-auto w-full rounded-md'>
					<source src={item.url} type='video/mp4' />
				</video>
				{item.caption && (
					<Typography variant='body2' className='mt-2 text-center'>
						{item.caption}
					</Typography>
				)}
			</div>
		)
	}

	if (item.mediaType === 'gif') {
		return (
			<div className='my-4'>
				<img
					src={item.url}
					alt={item.caption || ''}
					className='h-auto w-full'
				/>
				{item.caption && (
					<Typography variant='body2' className='mt-1 text-center'>
						{item.caption}
					</Typography>
				)}
			</div>
		)
	}

	return null
}
