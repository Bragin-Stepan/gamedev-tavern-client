import { Textarea } from '../../../ui/common/textarea'

import { CommentFormButtonsRow } from './components/comment-form-buttons-row'

export const CommentForm = () => {
	return (
		<div className='flex flex-col gap-4' id='comments'>
			<Textarea
				placeholder='Поспешите оставить комментарий'
				className='min-h-30'
			/>
			<CommentFormButtonsRow />
		</div>
	)
}
