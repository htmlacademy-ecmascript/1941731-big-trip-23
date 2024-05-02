import dayjs from 'dayjs';
export const getRandomNumberFromRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomElementFromArray = (array) =>
  array[getRandomNumberFromRange(0, array.length)];

export const getRandomDateFromRange = (start, end) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

export const getRandomBoolean = () => getRandomNumberFromRange(0, 1) > 0;

export const humanizeDateToPoint = (date) =>
  date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

export const dateFormat = (date,format) => dayjs(date).format(format);
