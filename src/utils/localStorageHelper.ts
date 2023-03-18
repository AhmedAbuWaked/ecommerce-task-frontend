export const localStorageHelper = {
  get(key: string): any {
    const stored = localStorage.getItem(key);
    return stored == null ? undefined : JSON.parse(stored);
  },
  set(key: string, value: any) {
    if (value !== null && value !== undefined) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },
  clearItem(key: string) {
    localStorage.removeItem(key);
  },
  clearItems(keys: string[]): void {
    keys.forEach((key) => this.clearItem(key));
  },
};
