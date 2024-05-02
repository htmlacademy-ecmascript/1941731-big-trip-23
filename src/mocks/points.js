import {
  getRandomElementFromArray,
  getRandomDateFromRange,
  getRandomNumberFromRange,
  getRandomBoolean,
} from '../utils/utils';
import {POINT_TYPES} from '../consts/const';

const MIN_MAX_PRICE = [1, 100500];
const MOCKED_POINTS_AMOUNT = 10;


export const eventPointDefault = {
  type: POINT_TYPES[0],
  startDate: new Date(),
  endDate: null,
  destination: null,
  price: getRandomNumberFromRange(...MIN_MAX_PRICE),
  offers: [],
  isFavourite: false,
};

export const mockedEventPoints = Array.from({
  length: MOCKED_POINTS_AMOUNT,
}).map(() => ({
  type: getRandomElementFromArray(POINT_TYPES),
  destination: getRandomNumberFromRange(1, 5),
  startDate: getRandomDateFromRange(new Date(2012, 0, 1), new Date()),
  endDate: getRandomDateFromRange(new Date(), new Date(2077, 0, 1)),
  price: 20,
  offers: Array.from(
    new Set(Array.from({ length: 5 }, () => getRandomNumberFromRange(1, 5))),
  ),
  isFavourite: getRandomBoolean(),
}));
