// header-notifications-button.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { IoNotifications } from 'react-icons/io5';
import { useInfiniteQuery } from '@tanstack/react-query';
import { DotNotification } from '../../dot-notification';
import { Button, Divider, ScrollArea, Typography } from '@/components/ui';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AvatarUser } from '../../avatar-user';
import { VirtualizerList } from '../../../ui/virtualizer-list';

const fetchNotifications = async ({ pageParam = 0 }: { pageParam: number }) => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const data = Array.from({ length: 20 }).map((_, i) => ({
    id: pageParam * 20 + i,
    text: `Уведомление [${pageParam * 20 + i + 1}]`,
  }));

  return {
    data,
    nextPage: pageParam + 1,
    hasNextPage: pageParam < 2,
  };
};

const randomNotification = () => {
  const arrVariants = [
    'Новый комментарий',
    'Новая подписка',
    'Новое сообщение',
    'Скоро встреча',
  ];

  return arrVariants[Math.floor(Math.random() * arrVariants.length)];
};

export const HeaderNotificationsButton = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['notifications'],
      queryFn: fetchNotifications,
      getNextPageParam: lastPage => lastPage.nextPage,
      initialPageParam: 0,
    });

  const notifications = React.useMemo(
    () => data?.pages.flatMap(page => page.data) || [],
    [data]
  );

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size={'icon'} variant={'link'} className="relative">
            <IoNotifications className="text-custom-gray" size={18} />
            <DotNotification className="absolute top-0.5 right-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-100">
          <Typography variant={'h2'} className="w-full text-center py-2">
            Уведомления
          </Typography>

          <Divider className="my-3" />

          <ScrollArea className="max-h-96">
            <VirtualizerList
              items={notifications}
              itemSize={60}
              overscan={5}
              hasNextPage={hasNextPage}
              isFetchingNextPage={isFetchingNextPage}
              fetchNextPage={fetchNextPage}
            >
              {(item, index) => (
                <Link href={`/notification/${item.id}`} key={item.id}>
                  <DropdownMenuItem className="h-[60px]">
                    <AvatarUser
                      src="../../../public/avatar.png"
                      nickname="Nickname"
                      size="sm"
                    />
                    {item.text}
                  </DropdownMenuItem>
                </Link>
              )}
            </VirtualizerList>
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
