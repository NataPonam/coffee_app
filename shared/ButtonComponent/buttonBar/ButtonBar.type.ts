export type ItemData = {
  key: UnionKeys;
};
export type UnionKeys = 'Все' | 'Капучино' | 'Макиатто' | 'Латте' | 'Американо';

export const DATA: ItemData[] = [
  { key: 'Все' },
  { key: 'Капучино' },
  { key: 'Макиатто' },
  { key: 'Латте' },
  { key: 'Американо' },
];
