// Seasons game

const seasons = ['Зима', 'Весна', 'Лето', 'Осень'];

const calcSeasons = (e, n) => {
  e.preventDefault();
  if (n > 12 || n < 1 || isNaN(n)) {
    alert(`Ошибка, вы ввели ${n}, необходимо число от 1 до 12`);
    return;
  }

  let index;

  if (n === 12 || n <= 2) {
    index = 0;
  } else {
    index = Math.floor(n / 3);
  }

  alert(`Месяц под помером ${n} соответствует сезону: ${seasons[index]}`);
};

let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

const randomArr = (arr) => {
  arr = arr.sort(() => Math.random() - 0.5);
};

const questionsForUser = (e) => {
  e.preventDefault();
  let counter = 0;

  randomArr(fruits);
  alert(fruits);

  const arr = [
    { question: prompt('Чему равнялся первый элемент массива?', ''), answer: fruits[0] },
    {
      question: prompt('Чему равнялся последний элемент массива?', ''),
      answer: fruits[fruits.length - 1],
    },
  ];

  arr.forEach((item) => {
    if (item.answer === item.question) {
      counter++;
    }
  });

  switch (counter) {
    case 1:
      alert('Вы были близки к победе!');
      break;
    case 2:
      alert('Поздравляю! Вы победили!');
      break;
    default:
      alert('Абсолютно всё неправильно!');
      break;
  }
};

// ЗАДАЧА №1
const rectangle = {
  width: 4,
  height: 4,
  getSquare: function () {
    return this.width * this.height;
  },
};
console.log(rectangle.getSquare());

//ЗАДАЧА №2
const price = {
  price: 10,
  discount: '15%',
  getPrice: function () {
    return this.price;
  },
  getDiscountPrice: function () {
    const discount =
      1 -
      this.discount
        .split('')
        .filter((item) => !isNaN(+item))
        .join('') *
        0.01;
    return this.price * discount;
  },
};
console.log(price.getDiscountPrice());

//ЗАДАЧА №3
let sizes = { width: 5, height: 10 },
  getSquare = function () {
    return this.width * this.height;
  };

console.log(getSquare.call(sizes));

//ЗАДАЧА 4
function counter() {
  let counter = 0;
  return function () {
    return ++counter;
  };
}

let func = counter();

console.log(func());
console.log(func());
console.log(func());
console.log(func());

//ЗАДАЧА 5

function sum(a) {
  let counter = a;

  function func(b) {
    counter += b;
    return func;
  }

  func.toString = function () {
    return counter;
  };

  return func;
}

let x = sum(2)(5)(10);
let c = sum(6)(5)(10);

alert(x);
alert(c);
