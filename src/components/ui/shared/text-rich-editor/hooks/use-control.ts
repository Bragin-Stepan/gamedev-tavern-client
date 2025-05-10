import { RefObject } from "react";

export const useControl = () => {
  const heightConrol = (inputRef: RefObject<HTMLTextAreaElement | null>) => {
    if (inputRef.current) {
      const currentHeight = inputRef.current.offsetHeight;
      const scrollHeight = inputRef.current.scrollHeight;

      if (scrollHeight <= currentHeight) {
        inputRef.current.style.height = 'auto';
      }

      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  };

  return { heightConrol };
};