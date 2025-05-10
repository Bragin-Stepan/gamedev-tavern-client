import Image from 'next/image'
import React from 'react'

export const Banner = () => {
	return (
		<button className='relative h-40 cursor-pointer overflow-hidden rounded-xl duration-200 hover:opacity-80'>
			<Image
				src={
					'https://imgs.crazygames.com/car-games-car-racing-game_16x9/20240628180656/car-games-car-racing-game_16x9-cover?metadata=none&quality=40&width=1200&height=630&fit=crop'
				}
				alt='banner'
				className='object-cover object-center'
				fill
			/>
		</button>
	)
}
