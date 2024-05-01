const TITLES = [
  'Милая, уютная квартирка в центре Токио',
  'Милая, уютная квартирка в центре Москвы',
  'Большая квартира',
];

const APARTMENTTYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECKTIME = [
  '12:00',
  '13:00',
  '14:00',
];

const APARTMENTDESCRIPTIONS = [
  'Светлое',
  'Просторное',
  'Уютное'
];

const APARTMENTFEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator'
];

const PHOTOSURL = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];


//random number v diapasone
function getRandomIntegerGenerator(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

//po poryadku
function createConsecutiveIntegerGenerator(min, max) {
  const previousValues = [];

  return function () {
    let counter = min;
    let currentValue = counter++;
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }

    while (previousValues.includes(currentValue)) {
      currentValue++;
    }


    previousValues.push(currentValue);
    if (currentValue < 10) {
      currentValue = '0' + currentValue;
    }
    return currentValue;
  };
}

const generateAvatarId = createConsecutiveIntegerGenerator(1, 10);

const getRandomArrayItem = (array) => {
  const randomNumber = getRandomIntegerGenerator(0, array.length - 1);
  const randomItem = array[randomNumber];
  return randomItem;
};

const getRandomArrayRange = (array) => {
  const result = [];
  const resultArrayLength = getRandomIntegerGenerator(1, array.length - 1);
  for (let i = 0; i < resultArrayLength; i++) {
    const randomItem = getRandomArrayItem(array);
    if (!(result.includes(randomItem))) {
      result.push(randomItem);
    }
  }
  return result;
};


const createAd = () => ({
  author: {
    avatar: `img/avatars/user${generateAvatarId()}.png`,
  },
  offer: {
    title: getRandomArrayItem(TITLES),
    address: `${Number(`35.${getRandomIntegerGenerator(65000, 70000)}`)}, ${Number(`139.${getRandomIntegerGenerator(70000, 80000)}`)}`,
    price: getRandomIntegerGenerator(1, 10), //Infinity
    type: getRandomArrayItem(APARTMENTTYPES),
    rooms: getRandomIntegerGenerator(1, 10), //Infinity
    guests: getRandomIntegerGenerator(1, 10), //Infinity
    checkin: getRandomArrayItem(CHECKTIME),
    checkout: getRandomArrayItem(CHECKTIME),
    features: getRandomArrayRange(APARTMENTFEATURES),
    description: getRandomArrayItem(APARTMENTDESCRIPTIONS),
    photos: getRandomArrayRange(PHOTOSURL)
  },
  location: {
    lat: Number(`35.${getRandomIntegerGenerator(65000, 70000)}`),
    lng: Number(`139.${getRandomIntegerGenerator(70000, 80000)}`)
  }
});

let adsArray = Array.from({length: 10}, createAd);

console.log(adsArray);
