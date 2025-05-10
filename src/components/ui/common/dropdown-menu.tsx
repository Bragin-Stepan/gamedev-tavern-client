import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/utils/tailwind-merge'

const commonStyles = {
	base: 'outline-hidden cursor-pointer duration-50 select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
	padding: {
		default:
			'px-4 py-2 hover:bg-custom-gray/15 border-transparent border-1 hover:border-custom-gray/20',
		// 'hover:text-custom-brand',
		inset: 'pl-9'
	},
	text: {
		default: 'text-sm lg:text-base',
		label: 'font-medium'
	},
	animations: {
		enter:
			'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
		slide: {
			bottom: 'data-[side=bottom]:slide-in-from-top-2',
			left: 'data-[side=left]:slide-in-from-right-2',
			right: 'data-[side=right]:slide-in-from-left-2',
			top: 'data-[side=top]:slide-in-from-bottom-2'
		}
	},
	colors: {
		default: 'bg-custom-white text-custom-black',
		destructive: 'text-custom-error'
	},
	rounded: 'rounded-xl',
	shadow: 'shadow-xl border-1 border-custom-gray/20',
	icon: '[&_svg:not([class*="size-"])]:size-4 lg:[&_svg:not([class*="size-"])]:size-4.5'
}

function DropdownMenu({
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
	return <DropdownMenuPrimitive.Root data-slot='dropdown-menu' {...props} />
}

function DropdownMenuPortal({
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
	return (
		<DropdownMenuPrimitive.Portal data-slot='dropdown-menu-portal' {...props} />
	)
}

function DropdownMenuTrigger({
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
	return (
		<DropdownMenuPrimitive.Trigger
			data-slot='dropdown-menu-trigger'
			{...props}
		/>
	)
}

function DropdownMenuContent({
	className,
	sideOffset = 4,
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
	return (
		<DropdownMenuPrimitive.Portal>
			<DropdownMenuPrimitive.Content
				data-slot='dropdown-menu-content'
				sideOffset={sideOffset}
				className={cn(
					commonStyles.base,
					commonStyles.animations.enter,
					commonStyles.animations.slide.bottom,
					commonStyles.colors.default,
					commonStyles.rounded,
					commonStyles.shadow,
					'z-50 min-w-[10rem] overflow-x-hidden overflow-y-auto p-2',
					className
				)}
				{...props}
			/>
		</DropdownMenuPrimitive.Portal>
	)
}

function DropdownMenuGroup({
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
	return (
		<DropdownMenuPrimitive.Group data-slot='dropdown-menu-group' {...props} />
	)
}

function DropdownMenuItem({
	className,
	inset,
	variant = 'default',
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
	inset?: boolean
	variant?: 'default' | 'destructive'
}) {
	return (
		<DropdownMenuPrimitive.Item
			data-slot='dropdown-menu-item'
			data-inset={inset}
			data-variant={variant}
			className={cn(
				commonStyles.base,
				commonStyles.padding[inset ? 'inset' : 'default'],
				commonStyles.text.default,
				commonStyles.rounded,
				commonStyles.icon,
				commonStyles.colors[variant],
				'[&_svg:not([class*="text-"])]:text-muted-foreground relative flex items-center gap-4 [&_svg]:pointer-events-none [&_svg]:shrink-0',
				className
			)}
			{...props}
		/>
	)
}

function DropdownMenuCheckboxItem({
	className,
	children,
	checked,
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
	return (
		<DropdownMenuPrimitive.CheckboxItem
			data-slot='dropdown-menu-checkbox-item'
			className={cn(
				commonStyles.base,
				commonStyles.padding.default,
				commonStyles.text.default,
				commonStyles.rounded,
				'relative flex items-center gap-2',
				className
			)}
			checked={checked}
			{...props}
		>
			<span className='pointer-events-none absolute left-2 flex size-3.5 items-center justify-center'>
				<DropdownMenuPrimitive.ItemIndicator>
					<CheckIcon className='size-4' />
				</DropdownMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</DropdownMenuPrimitive.CheckboxItem>
	)
}

function DropdownMenuRadioGroup({
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
	return (
		<DropdownMenuPrimitive.RadioGroup
			data-slot='dropdown-menu-radio-group'
			{...props}
		/>
	)
}

function DropdownMenuRadioItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
	return (
		<DropdownMenuPrimitive.RadioItem
			data-slot='dropdown-menu-radio-item'
			className={cn(
				commonStyles.base,
				commonStyles.padding.default,
				commonStyles.text.default,
				commonStyles.rounded,
				'relative flex items-center gap-2',
				className
			)}
			{...props}
		>
			<span className='pointer-events-none absolute left-2 flex size-3.5 items-center justify-center'>
				<DropdownMenuPrimitive.ItemIndicator>
					<CircleIcon className='size-2 fill-current' />
				</DropdownMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</DropdownMenuPrimitive.RadioItem>
	)
}

function DropdownMenuLabel({
	className,
	inset,
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
	inset?: boolean
}) {
	return (
		<DropdownMenuPrimitive.Label
			data-slot='dropdown-menu-label'
			data-inset={inset}
			className={cn(
				commonStyles.base,
				commonStyles.padding[inset ? 'inset' : 'default'],
				commonStyles.text.label,
				className
			)}
			{...props}
		/>
	)
}

function DropdownMenuSeparator({
	className,
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
	return (
		<DropdownMenuPrimitive.Separator
			data-slot='dropdown-menu-separator'
			className={cn('bg-border -mx-1 my-1 h-px', className)}
			{...props}
		/>
	)
}

function DropdownMenuShortcut({
	className,
	...props
}: React.ComponentProps<'span'>) {
	return (
		<span
			data-slot='dropdown-menu-shortcut'
			className={cn(
				'text-muted-foreground ml-auto text-xs tracking-widest',
				className
			)}
			{...props}
		/>
	)
}

function DropdownMenuSub({
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
	return <DropdownMenuPrimitive.Sub data-slot='dropdown-menu-sub' {...props} />
}

function DropdownMenuSubTrigger({
	className,
	inset,
	children,
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
	inset?: boolean
}) {
	return (
		<DropdownMenuPrimitive.SubTrigger
			data-slot='dropdown-menu-sub-trigger'
			data-inset={inset}
			className={cn(
				commonStyles.base,
				commonStyles.padding[inset ? 'inset' : 'default'],
				commonStyles.text.default,
				commonStyles.icon,
				commonStyles.rounded,
				'data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-pointer items-center gap-4',
				className
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className='absolute right-6 size-4' />
		</DropdownMenuPrimitive.SubTrigger>
	)
}

function DropdownMenuSubContent({
	className,
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
	return (
		<DropdownMenuPrimitive.SubContent
			data-slot='dropdown-menu-sub-content'
			className={cn(
				commonStyles.base,
				commonStyles.animations.enter,
				commonStyles.animations.slide.bottom,
				commonStyles.colors.default,
				commonStyles.rounded,
				commonStyles.icon,
				commonStyles.shadow,
				'z-50 min-w-[10rem] cursor-pointer overflow-hidden p-2',
				className
			)}
			{...props}
		/>
	)
}

export {
	DropdownMenu,
	DropdownMenuPortal,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuLabel,
	DropdownMenuItem,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubTrigger,
	DropdownMenuSubContent
}
