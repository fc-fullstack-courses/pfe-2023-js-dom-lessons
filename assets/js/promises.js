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

function executor(resolve, reject) {
  // функція яку треба виконати при успішному виконанні вашої операції
  // те що ви в неї кинете буде результатом успішного виконання промісу
  // resolve({
  //   id: 123,
  //   name: 'User',
  // });

  // функція яку треба виконати при НЕуспішному виконанні вашої операції
  // те що ви в неї кинете буде результатом НЕуспішного виконання промісу
  reject(1234);
}

const promise1 = new Promise(executor);

promise1.then(
  function onSuccess(promiseResult) {
    // перший колбек виконується при успішному виконанні проміса
    console.log('Yay!');
    console.log(promiseResult);
  },
  function onReject(err) {
    // другий колбек виконується при НЕуспішному виконанні проміса
    // обробник помилки
    console.log('Oh no');
    console.log(err);
  }
);

