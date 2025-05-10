import { useEditorStore } from "../store";

export const useKeys = (index: number, id: string, item: any) => {
  const addItem = useEditorStore(state => state.addItem);
  const removeItem = useEditorStore(state => state.removeItem);

  const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addItem(index, 'paragraph');
        setTimeout(() => {
          const nextInput = document.querySelector(
            `[data-index="${index + 1}"]`
          ) as HTMLInputElement;
          if (nextInput) nextInput.focus();
        }, 0);
      } else if (e.key === 'Backspace' && item.content === '') {
        e.preventDefault();
        removeItem(id);
        setTimeout(() => {
          const prevInput = document.querySelector(
            `[data-index="${index - 1}"]`
          ) as HTMLInputElement;
          if (prevInput) prevInput.focus();
        }, 0);
      }
    };

  return {handleKeyDown}
}