import { useEditorStore } from "../store";

export const useDragEndDrop = () => {
    const handleDragEndDrop = (event: any) => {
      const { active, over } = event;
      if (active.id !== over.id) {
        useEditorStore.setState(state => {
          const oldIndex = state.items.findIndex(b => b.id === active.id);
          const newIndex = state.items.findIndex(b => b.id === over.id);
          const newItems = [...state.items];
          const [removed] = newItems.splice(oldIndex, 1);
          newItems.splice(newIndex, 0, removed);
          return { items: newItems };
        });
      }
    };

  return {handleDragEndDrop}
}