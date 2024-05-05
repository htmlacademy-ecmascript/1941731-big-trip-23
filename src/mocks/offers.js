import { getRandomBoolean, getRandomNumberFromRange } from '../utils/utils';

const MIN_MAX_PRICE = [1, 100500];

const OFFERS_NAMES = [
  'Order Uber',
  'Add luggage',
  'Rent a car',
  'Add breakfast',
  'Travel by train',
];
export const mockedOffers = OFFERS_NAMES.map((cityName, index) => ({
  id: index + 1,
  name: cityName,
  price: getRandomNumberFromRange(...MIN_MAX_PRICE),
  isSelected: getRandomBoolean(),
}));
