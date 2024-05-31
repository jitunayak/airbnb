import { ILocalStorage, LocalStorageKeys } from '../types/ILocalStorage';

export const setLocalStorage = (key: LocalStorageKeys, value: unknown) => {
  if (typeof value === 'string') {
    localStorage.setItem(key, value);
  }
  if (typeof value === 'object')
    localStorage.setItem(key, JSON.stringify(value));
};

export function getLocalStorage<K extends LocalStorageKeys>(
  storageKey: K
): ILocalStorage[K] | null {
  const value = localStorage.getItem(storageKey);
  if (!value) {
    return null;
  }
  try {
    const parsedValue = JSON.parse(value);
    return parsedValue as ILocalStorage[K];
  } catch (e) {
    return value as ILocalStorage[K];
  }
}
