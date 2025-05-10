type Props = {
	children?: React.ReactNode
}

export const AsideBase = ({ children }: Props) => {
	if (!children) {
		return null
	}

	return (
		<div className='hidden w-5/7 flex-col gap-2 lg:flex lg:w-3/6 lg:min-w-[380px] lg:gap-4'>
			{/* <div className='hidden w-5/7 flex-col gap-2 md:flex lg:w-3/6 lg:min-w-[380px] lg:gap-4'> */}
			{children}
		</div>
	)
}
