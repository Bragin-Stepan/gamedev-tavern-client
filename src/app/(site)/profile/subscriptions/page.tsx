import { Button } from '@/components/ui/common/button'
import { Author } from '@/components/ui/shared/author'
import { BlockTitle } from '@/components/ui/shared/block-title'
import { WBlock } from '@/components/ui/shared/w-block'

export default function SubscriptionsPage() {
	return (
		<WBlock isBackground={false}>
			<WBlock>
				<BlockTitle title={'Мои подписки'} />
			</WBlock>

			<WBlock>
				<div className='flex flex-row items-center justify-between'>
					<Author />
					<Button size={'sm'}>Подписаться</Button>
				</div>
			</WBlock>

			<WBlock>
				<div className='flex flex-row items-center justify-between'>
					<Author />
					<Button size={'sm'}>Подписаться</Button>
				</div>
			</WBlock>

			<WBlock>
				<div className='flex flex-row items-center justify-between'>
					<Author />
					<Button size={'sm'}>Подписаться</Button>
				</div>
			</WBlock>
		</WBlock>
	)
}
