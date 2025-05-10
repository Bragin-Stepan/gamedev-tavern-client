import React from 'react'
import { Control, useFormContext, useWatch } from 'react-hook-form'

import { cn } from '@/utils/tailwind-merge'

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '../common/form'
import { Input } from '../common/input'
import { Textarea } from '../common/textarea'

type InputFormRules = {
	rules?: Record<string, any>
	maxLength?: {
		value: number
		message: string
	}
}

type InputFormProps = {
	name: string
	label?: string
	description?: string
	maxLength?: any
	control?: Control<any>
	charCountPosition?: 'inside' | 'outside'
	isTextarea?: boolean
} & Omit<React.ComponentProps<typeof Input>, 'name'> &
	Omit<React.ComponentProps<typeof Textarea>, 'name'> &
	InputFormRules

const InputForm = React.forwardRef<
	HTMLInputElement | HTMLTextAreaElement,
	InputFormProps
>(
	(
		{
			name,
			label,
			description,
			maxLength,
			className,
			charCountPosition = 'inside',
			control,
			isTextarea = false,
			rules,
			...props
		},
		ref
	) => {
		const formContext = useFormContext()
		const currentControl = control || formContext.control
		const value = useWatch({ control: currentControl, name })
		const { errors } = formContext.formState
		const hasError = Boolean(errors[name])

		const renderCharCount = () => {
			if (!maxLength) return null
			const currentLength = value?.length || 0

			return (
				<span
					className={cn(
						'text-custom-gray text-sm',
						charCountPosition === 'inside'
							? 'absolute right-3 -translate-y-1/2'
							: 'mt-1 text-right',
						isTextarea ? 'bottom-0' : 'top-1/2'
					)}
				>
					{currentLength}/{maxLength}
				</span>
			)
		}

		return (
			<FormField
				control={control}
				name={name}
				rules={{
					...rules,
					...(maxLength && {
						maxLength: {
							value: maxLength,
							message: `Максимальная длина ${maxLength} символов`
						}
					})
				}}
				render={({ field }) => {
					const Component = isTextarea ? Textarea : Input

					return (
						<FormItem className={cn(hasError && 'text-custom-error')}>
							{label && <FormLabel className='py-1'>{label}</FormLabel>}
							<FormControl>
								<div
									className={cn(
										'relative w-full',
										charCountPosition === 'outside' && 'flex flex-col'
									)}
								>
									<Component
										{...field}
										{...props}
										ref={ref as any}
										className={cn(
											maxLength && charCountPosition === 'inside' && 'pr-16',
											hasError &&
												'ring-custom-error/50 bg-custom-error/5 border-transparent ring-2',
											className
										)}
										maxLength={maxLength}
									/>
									{renderCharCount()}
								</div>
							</FormControl>
							{description && <FormDescription>{description}</FormDescription>}
							<FormMessage />
						</FormItem>
					)
				}}
			/>
		)
	}
)

InputForm.displayName = 'InputForm'

export { InputForm }
