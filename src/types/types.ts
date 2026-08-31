const LOCALES = ['en', 'ar'] as const;
type Locale = (typeof LOCALES)[number];

type Localized<T> = Record<Locale, T>;

const CONCENTRATIONS = ['edt', 'edp', 'parfum', 'cologne'] as const;
type Concentration = (typeof CONCENTRATIONS)[number];

const FAMILIES = [
  'citrus',
  'floral',
  'woody',
  'amber',
  'spicy',
  'gourmand',
  'fruity',
  'green',
  'musk',
  'leather',
] as const;
type Family = (typeof FAMILIES)[number];

const POSITIONS = ['top', 'heart', 'base'] as const;
type Position = (typeof POSITIONS)[number];

const AUDIENCES = ['men', 'women', 'unisex'] as const;
type Audience = (typeof AUDIENCES)[number];
