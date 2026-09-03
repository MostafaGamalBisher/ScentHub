import type { Family, Localized } from '@/catalog/taxonomy';

export type Note = {
  name: Localized<string>;
  family: Family;
};

export const NOTES = {
  bergamot: { name: { en: 'Bergamot', ar: 'برغموت' }, family: 'citrus' },
  lemon: { name: { en: 'Lemon', ar: 'ليمون' }, family: 'citrus' },
  jasmine: { name: { en: 'Jasmine', ar: 'ياسمين' }, family: 'floral' },
  vanilla: { name: { en: 'Vanilla', ar: 'فانيلا' }, family: 'gourmand' },
} as const satisfies Record<string, Note>;

export type NoteId = keyof typeof NOTES;
