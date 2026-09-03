import { Localized } from '@/catalog/taxonomy';
import { HouseId } from '@/catalog/houses';

type Variant = {
  id: string;
  sizeMl: number;
  priceHalalas: number;
};

type Product = {
  name: Localized<string>;
  house: HouseId;
};
