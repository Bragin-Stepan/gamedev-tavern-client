import { TPostItemType, TPostContentItem } from "@/types/post-item-types";

export interface IEditorStore {
  title: string;
  items: TPostContentItem[];
  setTitle: (title: string) => void;
  setItems: (items: TPostContentItem[]) => void;
  addItem: (index: number, type: TPostItemType) => void;
  updateItem: (item: TPostContentItem) => void;
  removeItem: (id: string) => void;
  resetData: () => void
}