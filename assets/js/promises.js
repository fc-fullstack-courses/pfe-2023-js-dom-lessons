// Promise - обіцянка, сучасний спосіб написання асинхронного коду у JS
// покликаний вирішити проблему callback hell-у
/*
  проміс це об'єкт, якій буде містити результати асинхроної операції

  має три стани:
    - pending ('очікавання') початковий стан промісу
  після pending проміс може перейти у один з наступних станів:
    - fullfiled ('виконано') - стан промісу коли операція завершилася успішно
    - rejected ('відхилено') - стан промісу коли операція завершилася помилкою
*/

// створення промісу через конструктор
// const promise1 = new Promise(); // error

// function executor(resolve, reject) {
//   // функція яку треба виконати при успішному виконанні вашої операції
//   // те що ви в неї кинете буде результатом успішного виконання промісу
//   // resolve({
//   //   id: 123,
//   //   name: 'User',
//   // });

//   // функція яку треба виконати при НЕуспішному виконанні вашої операції
//   // те що ви в неї кинете буде результатом НЕуспішного виконання промісу
//   reject(1234);
// }

// const promise1 = new Promise(executor);

// const promise2 = promise1.then(
//   function onSuccess(promiseResult) {
//     // перший колбек виконується при успішному виконанні проміса
//     console.log('Yay!');
//     console.log(promiseResult);

//     // буде покладено у результат promise2, який буде відхиленим
//     // throw new Error('bad data');

//     // буде покладено у результат promise2, який буде виконаним
//     return 'test';
//   },
//   function onReject(err) {
//     // другий колбек виконується при НЕуспішному виконанні проміса
//     // обробник помилки
//     console.log('Oh no');
//     console.log(err);

//     // буде покладено у результат promise2, який буде відхиленим
//     // throw new Error('bad data');

//     // буде покладено у результат promise2, який буде виконаним
//     return 'test';
//   }
// );

/*
  Створити проміс, який у 50% випадків 
  буде виконаний успішно
  а у 50% - неуспішно
  в консолі побачити його статус 
  та залоговати те що він повертає.
*/

// new Promise((resolve, reject) => {
//   if (Math.random() > 0.5) {
//     resolve('success');
//   } else {
//     reject('failure');
//   }
// }).then(
//   (result) => {
//     console.log(result);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

//

function loadImage(imgUrl) {
  const image = document.createElement('img');
  image.src = imgUrl;

  const imageLoadPromise = new Promise((res, rej) => {
    image.addEventListener('load', () => {
      res(image);
    });

    image.addEventListener('error', () => {
      rej(new Error('couldnt download image'));
    });
  });

  return imageLoadPromise;
}

const normalPic =
  'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg';
const badPic = 'https://asdsadsa.asdsad';

// loadImage(normalPic).then((image) => document.body.append(image));

// loadImage(badPic).then((image) => document.body.append(image), (err) => alert(err.message));
// loadImage(badPic)
//   .then((image) => document.body.append(image))
//   .catch((err) => alert(err.message));

const todoURL = 'https://jsonplaceholder.typicode.com/todos';

// const fetchResult = fetch(todoURL);

// const res = fetchResult.then((response) => {
//   // const res = response.json(); // асинхронна десеріалізація JSON даних
//   return response.json();
// });

// res.then((todoArr) => {
//   // console.log(todoArr);

//   const todosStringsArr = todoArr.map((todo) => JSON.stringify(todo));

//   const todoElems = todosStringsArr.map((todoStr) => {
//     const todoElem = document.createElement('p');
//     todoElem.textContent = todoStr;
//     return todoElem;
//   });

//   document.body.append(...todoElems);
// });

function createTodos(todoArr) {
  const todosStringsArr = todoArr.map((todo) => JSON.stringify(todo));

  const todoElems = todosStringsArr.map((todoStr) => {
    const todoElem = document.createElement('p');
    todoElem.textContent = todoStr;
    return todoElem;
  });

  document.body.append(...todoElems);
}

const loadingDiv = document.getElementById('loading');

// fetch('./todos.json')
//   .then((response) => response.json())
//   .then((todoArr) => {
//     createTodos(todoArr);
//     // loadingDiv.remove();
//   })
//   .catch((err) => {
//     console.log(err);
//     // loadingDiv.remove();
//   })
//   .finally(() => {
//     console.log('code executed');
//     loadingDiv.remove();
//   });

// async

function test1() {
  return 1;
}

const res1 = test1();

function test2() {
  return Promise.resolve(2);
}

const res2 = test2();

async function test3() {
  // return 3;
  throw 3;
}

const res3 = test3();

const test4 = async function () {
  return Promise.resolve(10);
};

const test5 = async () => {};

const obj = {
  asdsad: async function () {},
};
class Test {
  static async test() {}
}

// await
// await test5(); // помилка якщо файл не є модулем

async function testAwait() {
  const promise1 = new Promise((res, rej) => {
    res(10);
  });

  const number = await promise1;

  console.log(number);

  const number2 = number ** 2;

  console.log(number2);

  return number2 / 5;

  // const promise2 = promise1.then((number) => {
  //   console.log(number);
  //   const number2 = number ** 2;
  //   return number2;
  // });

  // const promise3 = promise2.then((number) => {
  //   console.log(number);
  //   return number / 5;
  // });

  // return promise3;
}

async function testAwait2() {
  const fetchResponse = fetch('./todos.json');

  const promiseWithData = fetchResponse.then((response) => response.json());

  const promiseWithTodoElems = promiseWithData.then((todoArr) => {
    createTodos(todoArr);
    loadingDiv.remove();
  });
}

async function testAwait3() {
  try {
    console.log('try');
    const response = await fetch('./todos.json');

    const todoArr = await response.json();

    createTodos(todoArr);
  } catch (err) {
    console.log('catch');
    console.log(err);
  } finally {
    console.log('finally');
    loadingDiv.remove();
  }
}
