import type { Localized } from '@/catalog/taxonomy';

export type House = {
  name: Localized<string>;
};
export const HOUSES = {
  'xerjoff': { name: { en: 'Xerjoff', ar: 'زيرجوف' } },
  'chanel': { name: { en: 'Chanel', ar: 'شانيل' } },
  'dior': { name: { en: 'Dior', ar: 'ديور' } },
  'amouage': { name: { en: 'Amouage', ar: 'أمواج' } },
  'parfums-de-marly': {
    name: { en: 'Parfums De Marly', ar: 'بارفام دي مارلي' },
  },
} as const satisfies Record<string, House>;

export type HouseId = keyof typeof HOUSES;
