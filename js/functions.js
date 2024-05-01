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

export {getRandomIntegerGenerator, createConsecutiveIntegerGenerator, getRandomArrayItem, getRandomArrayRange};
