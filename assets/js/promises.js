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

const promise2 = promise1.then(
  function onSuccess(promiseResult) {
    // перший колбек виконується при успішному виконанні проміса
    console.log('Yay!');
    console.log(promiseResult);

    // буде покладено у результат promise2, який буде відхиленим
    // throw new Error('bad data');

    // буде покладено у результат promise2, який буде виконаним
    return 'test';
  },
  function onReject(err) {
    // другий колбек виконується при НЕуспішному виконанні проміса
    // обробник помилки
    console.log('Oh no');
    console.log(err);

    // буде покладено у результат promise2, який буде відхиленим
    // throw new Error('bad data');

    // буде покладено у результат promise2, який буде виконаним
    return 'test';
  }
);

/*
  Створити проміс, який у 50% випадків 
  буде виконаний успішно
  а у 50% - неуспішно
  в консолі побачити його статус 
  та залоговати те що він повертає.
*/

new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve('success');
  } else {
    reject('failure');
  }
}).then(
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
);

