'use client'

import { usePathname } from "next/navigation";
import { hiddenRoutes } from "../config/hidden-routes";

/** Проверяет, скрыт ли компонент */
export const useHiddenAside = () => {
  const pathname = usePathname();
  const shouldHide = hiddenRoutes.includes(pathname);

  return {shouldHide}
}