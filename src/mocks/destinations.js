import { getRandomNumberFromRange } from '../utils/utils';

const MIN_MAX_PICTURES = [0, 5];

const MIN_MAX_DESCRIPTION = [1, 5];

const IMAGE_WIDTH = 248;
const IMAGE_HEIGHT = 152;

const CITIES_NAMES = ['Geneva', 'Moscow', 'Berlin', 'Tokyo', 'Madrid'];
/*
В примере сказано, что нужно использовать ссылку формата
"https://loremflickr.com/248/152?random=случайное_число"
Но в доке сайта написано, что запрос по умолчанию отдает
случайную картинку, кроме того, можно указать тег
*/

const getMockedPictures = (amount, pictureTag) =>
  Array.from({ length: amount }).map(
    () =>
      `https://loremflickr.com/${IMAGE_WIDTH}/${IMAGE_HEIGHT}/${pictureTag}`,
  );

export const mockedDestinations = CITIES_NAMES.map((cityName, index) => ({
  name: cityName,
  description: `${cityName} ${'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'.repeat(getRandomNumberFromRange(...MIN_MAX_DESCRIPTION))}`,
  id: index + 1,
  pictures: getMockedPictures(
    getRandomNumberFromRange(...MIN_MAX_PICTURES, cityName),
  ),
}));
