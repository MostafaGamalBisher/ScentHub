const LOCALES = ['en', 'ar'] as const;
type Locale = (typeof LOCALES)[number];

type Localized<T> = Record<Locale, T>;

const CONCENTRATIONS = ['EDT', 'EDP', 'Parfum', 'Cologne'] as const;
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
