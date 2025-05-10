import { cn } from '@/utils/tailwind-merge'

import { Typography } from '../common/typography'

type Props = {
	children: React.ReactNode
	isBackground?: boolean
	className?: string
	title?: string
}

/**
 * Блок с тенью
 * ----------------------
 *
 * @param {React.ReactNode} children - Компоненты внутри блока
 * @param {boolean} isBackground - Добавлять ли фон
 * @param {string} title - Заголовок
 * @param {string} className - Классы
 */
export const WBlock = ({
	children,
	isBackground = true,
	className,
	title
}: Props) => {
	return (
		<div
			className={cn(
				'relative flex w-full flex-col gap-2 lg:gap-3',
				isBackground && 'bg-custom-white rounded-xl p-4 shadow lg:p-5',
				className
			)}
		>
			{title && (
				<Typography variant='h2' className='pb-1'>
					{title}
				</Typography>
			)}
			{children}
		</div>
	)
}
