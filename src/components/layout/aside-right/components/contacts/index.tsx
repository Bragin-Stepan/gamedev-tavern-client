import Image from 'next/image'
import Link from 'next/link'
import { AiFillYoutube } from 'react-icons/ai'
import { FaVk } from 'react-icons/fa'
import { RiTelegram2Fill } from 'react-icons/ri'
import { TbBrandWhatsappFilled } from 'react-icons/tb'

import { Button } from '@/components/ui/common/button'
import { Typography } from '@/components/ui/common/typography'
import { WBlock } from '@/components/ui/shared/w-block'

export const Contacts = () => {
	return (
		<div className='flex w-full flex-col gap-2 lg:gap-3'>
			<WBlock className='flex flex-row justify-between'>
				<div className='flex w-full flex-col items-start justify-between'>
					<Button
						variant='link'
						size={'text'}
						className='text-custom-gray group hover:text-custom-verified hover:opacity-100'
					>
						<FaVk
							size={24}
							className='text-custom-gray group-hover:text-custom-verified group-hover:scale-110 group-hover:duration-200'
						/>
						{/* Вконтакте */}
					</Button>
					<Button
						variant='link'
						size={'text'}
						className='text-custom-gray group hover:text-custom-error hover:opacity-100'
					>
						<AiFillYoutube
							size={24}
							className='text-custom-gray group-hover:text-custom-error group-hover:scale-110 group-hover:duration-200'
						/>
						{/* YouTube */}
					</Button>
					<Button
						variant='link'
						size={'text'}
						className='text-custom-gray group hover:text-blue-300 hover:opacity-100'
					>
						<RiTelegram2Fill
							size={24}
							className='text-custom-gray group-hover:scale-110 group-hover:text-blue-300'
						/>
						{/* Telegram */}
					</Button>
					<Button
						variant='link'
						size={'text'}
						className='text-custom-gray group hover:text-custom-access hover:opacity-100'
					>
						<TbBrandWhatsappFilled
							size={24}
							className='text-custom-gray group-hover:text-custom-access group-hover:scale-110 group-hover:duration-200'
						/>
						{/* WhatsApp */}
					</Button>
				</div>
			</WBlock>

			<Link href='/' className='duration-100 hover:opacity-70'>
				<Typography className='text-custom-gray'>
					О проекте и правила
				</Typography>
			</Link>
			<Link href='/' className='duration-100 hover:opacity-70'>
				<Typography className='text-custom-gray'>Поддержать ресурс</Typography>
			</Link>
			<Link href='/' className='duration-100 hover:opacity-70'>
				<Typography className='text-custom-gray'>
					Политика конфиденциальности
				</Typography>
			</Link>
			<Typography className='text-custom-gray'>
				© 2025 Название и текст другой текст. Все права защищены
			</Typography>
		</div>
	)
}
