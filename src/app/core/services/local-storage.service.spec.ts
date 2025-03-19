import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService],
    });
    service = TestBed.inject(LocalStorageService);
  });

  it('creates a service', () => {
    expect(service).toBeTruthy();
  });

  describe('setItem', () => {
    it('should set an item in localStorage', () => {
      const key = 'test';
      const value = 'value';
      service.setItem(key, value);
      expect(localStorage.getItem(key)).toBe(JSON.stringify(value));
    });
  });

  describe('getItem', () => {
    it('should get an item from localStorage', () => {
      const key = 'test';
      const value = 'value';
      localStorage.setItem(key, JSON.stringify(value));
      expect(service.getItem<string>(key)).toBe(value);
    });

    it('should return null if the item does not exist', () => {
      const key = 'nonexistent';
      expect(service.getItem<string>(key)).toBeNull();
    });
  });

  describe('removeItem', () => {
    it('should remove an item from localStorage', () => {
      const key = 'test';
      localStorage.removeItem(key);
      expect(localStorage.getItem(key)).toBeNull();
    });
  });

  describe('clearAll', () => {
    it('should clear all items from localStorage', () => {
      const key = 'test';
      localStorage.clear();
      expect(localStorage.getItem(key)).toBeNull();
    });
  });
});
