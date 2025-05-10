'use client'

import React from 'react'
import { useController, useFormContext } from 'react-hook-form'

import { cn } from '@/utils/tailwind-merge'

import { Checkbox } from '../common/checkbox'
import { Label } from '../common/label'

// import { generateId } from '@/lib/id-generator';

type Props = {
	title: string
	name: string
	className?: string
}

export const CheckboxLabel = ({ title, name, className }: Props) => {
	const { control } = useFormContext()
	const {
		field: { value, onChange, ref },
		fieldState: { error }
	} = useController({
		name,
		control
	})

	// const id = generateId();

	return (
		<div
			className={cn(
				'flex flex-row items-center gap-2 duration-200 hover:opacity-90',
				className
			)}
		>
			<Checkbox
				id={name}
				checked={value}
				onCheckedChange={checked => onChange(checked)}
				ref={ref}
				aria-invalid={!!error}
				className={error ? 'border-red-500' : ''}
			/>
			<Label htmlFor={name} className='py-2'>
				{title}
			</Label>
		</div>
	)
}
