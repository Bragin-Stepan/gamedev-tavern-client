import { DropdownLinkButton } from '@/components/ui/shared/dropdown-link-button'
import { WBlock } from '@/components/ui/shared/w-block'

import { Comment } from '../comment/comment'

interface Props {
	contendId: string
}

export const CommentList = ({ contendId }: Props) => {
	// const {data, loading} = useFindCommentsQuery({variables: {contendId}})

	return (
		<WBlock isBackground={false} className='items-start'>
			<DropdownLinkButton
				title={'Все комментарии: 321'}
				items={[
					{ id: '1', title: 'Все комментарии', path: '/' },
					{ id: '2', title: 'Сначала старые', path: '/' },
					{ id: '3', title: 'Сначала новые', path: '/' }
				]}
			/>
			<WBlock>
				<Comment
					authorName='Иван'
					content='Основной комментарий'
					timeAgo='5 часов назад'
				>
					<Comment
						isNested
						authorName='Анна'
						content='Это ответ на основной комментарий Это ответ на основной комментарий Это ответ на основной комментарий Это ответ на основной комментарий'
						timeAgo='2 часа назад'
					>
						<Comment
							isNested
							authorName='Петр'
							content='Еще один ответ'
							timeAgo='1 час назад'
						/>
						<Comment
							isNested
							authorName='Петр'
							content='Еще один ответ'
							timeAgo='1 час назад'
						/>
					</Comment>
					<Comment
						isNested
						authorName='Мария'
						content='Другой ответ'
						timeAgo='3 часа назад'
					/>
				</Comment>
			</WBlock>

			{/* <Divider /> */}

			<WBlock>
				<Comment
					authorName='Иван'
					content='Основной комментарий'
					timeAgo='5 часов назад'
				>
					<Comment
						isNested
						authorName='Анна'
						content='Это ответ на основной комментарий'
						timeAgo='2 часа назад'
					></Comment>
				</Comment>
			</WBlock>
		</WBlock>
	)
}
