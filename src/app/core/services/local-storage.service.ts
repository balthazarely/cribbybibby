import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItem<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }

  getItem<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    } catch (error) {
      console.error('Error retrieving from localStorage:', error);
      return null;
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }
}
