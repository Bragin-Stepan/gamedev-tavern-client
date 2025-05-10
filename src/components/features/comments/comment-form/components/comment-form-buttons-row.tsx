import { FaRegFaceSmileWink } from 'react-icons/fa6'
import { FiPaperclip } from 'react-icons/fi'
import { MdOutlineAlternateEmail } from 'react-icons/md'

import { Button } from '@/components/ui/common/button'

export const CommentFormButtonsRow = () => {
	return (
		<div className='flex justify-between'>
			<div className='flex gap-2'>
				<Button size={'icon'} variant={'link'}>
					<FaRegFaceSmileWink className='text-custom-gray' size={20} />
				</Button>
				<Button size={'icon'} variant={'link'}>
					<FiPaperclip className='text-custom-gray' size={20} />
				</Button>
				<Button size={'icon'} variant={'link'}>
					<MdOutlineAlternateEmail className='text-custom-gray' size={20} />
				</Button>
			</div>
			<Button className='bg-custom-gray/10'>Написать</Button>
		</div>
	)
}
