import { v4 as uuidv4 } from 'uuid';

/**
 * Генерирует id
 * @returns {string}
 */
export const generateId = (): string => {
  return uuidv4();
};