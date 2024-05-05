export const getRandomNumberFromRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomElementFromArray = (array) =>
  array[getRandomNumberFromRange(0, array.length - 1)];

export const getRandomDateFromRange = (start, end) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

export const getRandomBoolean = () => getRandomNumberFromRange(0, 1) > 0;

export const humanizeDateToPoint = (date) =>
  date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

export function dateFormat(date, format) {
  const formattedDate = typeof date === 'number' ? new Date(date * 1000) : date;
  switch (format) {
    case 'yyyy-mm-dd':
      return formattedDate.toISOString().split('T')[0];
    case 'hh:mm':
      return formattedDate.toISOString().split('T')[1].slice(0, 5);
    case 'dd/mm/yy':
      return `${`0${formattedDate.getDate()}`.slice(-2)}/${`0${formattedDate.getMonth() + 1}`.slice(-2)}/${formattedDate.getFullYear().toString().slice(-2)}`;
    case 'H M':
      return `${formattedDate.getHours() > 0 ? `${formattedDate.getHours()}H` : ''} ${formattedDate.getMinutes() > 0 ? `${formattedDate.getMinutes()}M` : ''}`;
    default:
    // return `date.getFullYear()date.getDay()`;
  }
}
