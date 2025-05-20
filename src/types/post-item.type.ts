
export type TPostItemType =
  | 'paragraph'
  | 'h2'
  | 'h3'
  | 'list'
  | 'quote'
  | 'separator'
  | 'media';

  interface IPostBaseItem {
    id: string;
    type: TPostItemType;
  }

export interface IPostParagraphItem extends IPostBaseItem {
  type: 'paragraph';
  content: string;
}

export interface IPostHeadingTwoItem extends IPostBaseItem {
  type: 'h2';
  content: string;
}

export interface IPostHeadingThreeItem extends IPostBaseItem {
  type: 'h3';
  content: string;
}

export interface IPostListItem extends IPostBaseItem {
  type: 'list';
  content: string[];
}

export interface IPostQuoteItem extends IPostBaseItem {
  type: 'quote';
  text: string;
  caption: string;
}

export interface IPostSeparatorItem extends IPostBaseItem {
  type: 'separator';
}

type TMedia = 'image' | 'gallery' | 'gif' | 'video'

export interface IPostMediaItem extends IPostBaseItem {
  type: 'media';
  mediaType: TMedia;
  url?: string | null | undefined;
  caption?: string;
  items?: Array<{ url: string; caption?: string }>;
}

export type TPostContentItem =
  | IPostParagraphItem
  | IPostHeadingTwoItem
  | IPostHeadingThreeItem
  | IPostListItem
  | IPostQuoteItem
  | IPostSeparatorItem
  | IPostMediaItem;

  export type TPostContent = {
    title: string;
    data: TPostContentItem[];
  }