import React, { ElementType } from 'react'

import { cn } from '@/utils/tailwind-merge'

type TVariantsText = {
	h1: string
	h2: string
	h3: string
	body1: string
	body2: string
	// button: string
	caption: string
	subtitle1: string
	subtitle2: string
}

type Props = {
	children: React.ReactNode
	variant?: keyof TVariantsText
	numberLines?: number
	className?: string
} & React.HTMLAttributes<HTMLElement>

/**
 * Текст
 * -------------------
 *
 * @param {React.ReactNode} children - Контент
 * @param {string} variant - Вариант текста (default: body1)
 * @param {number} numberLines - Количество строк
 * @param {string} className - Классы
 */
export const Typography = ({
	children,
	variant = 'body1',
	numberLines,
	className,
	...props
}: Props) => {
	const tagMap: Record<keyof TVariantsText, ElementType> = {
		h1: 'h1',
		h2: 'h2',
		h3: 'h3',
		body1: 'p',
		body2: 'p',
		// button: 'span',
		caption: 'span',
		subtitle1: 'p',
		subtitle2: 'p'
	}

	const styles: TVariantsText = {
		h1: 'text-[20px] lg:text-2xl font-extrabold leading-tight text-custom-black leading-tight',
		h2: 'text-[18px] lg:text-[20px] font-semibold text-custom-black leading-tight tracking-tight',
		h3: 'text-[16px] lg:text-[18px] font-semibold text-custom-black leading-normal tracking-normal',
		body1:
			'text-sm lg:text-base text-custom-black leading-relaxed tracking-normal font-normal dark:opacity-80',
		body2:
			'text-[13px] lg:text-sm text-custom-gray leading-normal tracking-normal font-normal',
		caption:
			'text-[10px] lg:text-xs text-custom-gray-dark leading-tight tracking-tight',
		subtitle1:
			'text-md lg:text-lg font-medium text-custom-black leading-normal tracking-normal',
		subtitle2:
			'text-sm lg:text-base font-medium text-custom-black leading-normal tracking-normal'
	}

	const Tag = tagMap[variant]

	const style: React.CSSProperties = numberLines
		? {
				overflow: 'hidden',
				display: '-webkit-box',
				WebkitBoxOrient: 'vertical',
				WebkitLineClamp: numberLines
			}
		: {}

	return (
		<Tag className={cn(styles[variant], className)} style={style} {...props}>
			{children}
		</Tag>
	)
}
