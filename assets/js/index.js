// отримання доступу до DOM

// window - об'єктне уявлення браузера

// window.document - DOM
// document - DOM

// console.dir(document);

/*
  2 концепції взаємодії з домом:
    1. все в домі зроблено у вигляді об'єктів
    2. працювати будемо за допомогою подій
*/

/*
  по кліку на кнопку вивести на екран якесь повідомлення алертом

    1. маємо знати з ким буде щось відбуватися
    2. маємо сказати коли нам потрібно щось робити
    3. маємо щось зробити
*/

// 1 знайти кнопку
// const buttons = document.getElementsByTagName('button');
// const button = buttons[0];

// 2. сказати що при натисканні на кнопку щось має відбутися
// eventTarget.addEventListener('event type', callbackListener);
// button.addEventListener('click', btnAlert);

// 3. маємо щось зробити +
// function btnAlert() {
//   alert('Hello from JS');
// }

/*
  зробити лічільник
  по кліку на кнопку має алертом виводитись кількість кліків по кнопці
*/

// const taskBtn = document.getElementsByTagName('button')[0];

// let clicks = 0;

// function clickHandler () {
//   alert(`Clicks: ${++clicks}`);
// }

// taskBtn.addEventListener('click',clickHandler);

function createClickHandler() {
  let clicks = 0;

  return function clickHandler() {
    alert(`Clicks: ${++clicks}`);
  };
}

// const clickHandler = createClickHandler();

// taskBtn.addEventListener('click',clickHandler);

// taskBtn.addEventListener('click', createClickHandler());

// пошук елемента у ДОМ - дереві
/*
document.getElementsByTagName('div') - шукає усі елементи з указаним тегом і кладе іх у псевдомасив (є ітератор)
* document.getElementById('someId') - повертає перший елемент з вказаним айді
document.getElementsByClassName('className') - шукає усі елементи з указаним класом
document.getElementsByName('name') - шукає усі елементи з указаним атрибутом name

* document.querySelector('#div.btn > span') - повертає перший елемент який задовільняє вказаному css селектору
document.querySelectorAll('#div.btn > span') - повертає всі елементи які задовільняють вказаному css селектору
*/

// const h1 = document.querySelector('section > h1');

// const img = document.querySelector('section+img');
// const img2 = document.querySelector('img[alt="Find ME"]');

// const p = document.querySelector('.section > p');

/*
  на кнопку повісимо слухач, який має спрацювати тількі один раз
*/

const btn = document.querySelector('#btn');

// let isClicked = false;

// btn.addEventListener('click', () => {
//   console.log('listener called');
//   if(!isClicked) {
//     alert('click happened');
//     isClicked = true;
//   }
// });

// btn.addEventListener(
//   'click',
//   () => {
//     console.log('listener called');
//     alert('click happened');
//   },
//   { once: true }
// );

function logText(text, options = {}) {
  // if (typeof options === 'object') {

  // } else if (typeof options === 'boolean') {

  // } else {
  //   throw new TypeError();
  // }

  if (options.isUpper) {
    console.log(text.toUpperCase());
  } else {
    console.log(text);
  }
}

// const singleUseListener = () => {
//   console.log('listener called');
//   console.log('click happened');

//   btn.removeEventListener('click', singleUseListener);
// }

// btn.addEventListener('click', singleUseListener);

// const clickHandler = (event) => {
//   // console.log(event);
//   // console.log(event.target); // найглибший елемент з ким відбулась подія
//   console.log(event.currentTarget); // елемент, на якому висить обробник який запустився
// };

// btn.addEventListener('click', clickHandler); // button
// document.body.addEventListener('click', clickHandler); // body
// document.addEventListener('click', clickHandler); // html
// window.addEventListener('click', clickHandler); // сторінка

// const fakeClickEvent = new MouseEvent('click');
// btn.dispatchEvent(fakeClickEvent);

/*
  у вас має бути кнопка з текстом
    при натисканні на кнопку ви маєте заалертити її текстовий вміст
    текстові дані треба брати з JS


*/

// btn.addEventListener('click', (event) => {
//   // btn.textContent
//   console.log(event.target.textContent);
//   console.log(event.target.innerText);

//   // event.target.textContent = 'test'; // змінить текст
//   // console.log(event.target.innerHTML);
//   // event.target.innerHTML = '<ul><li>what happened</li></ul><script>asdsadsa</script>';
// });

/*
  зробити кнопку при натисканні на яку у користувача питають промпром число
  також поруч з кнопкою має бути параграф
  в параграфі ви маєпо показати результат зведення данго користувачем числа у квадрат
*/

const numbBtn = document.querySelector('#number-btn');
// const par = document.querySelector('#display-p');

// numbBtn.addEventListener('click', (e) => {
//   const number = +prompt('Enter number');

//   par.textContent = `Result is: ${number ** 2}`;
// });

// numbBtn.addEventListener('click', (e) => {
//   const number = +prompt('Enter number');

//   e.target.parentElement.children[0].textContent = `Result is: ${number ** 2}`;

//   // par.textContent = `Result is: ${number ** 2}`;
// });

const clickHandler = (event) => {
  // console.log(event);
  // console.log(event.target); // найглибший елемент з ким відбулась подія
  console.log(event.currentTarget); // елемент, на якому висить обробник який запустився
  event.stopPropagation();
};

// btn.addEventListener('click', clickHandler); // button 1
// document.body.addEventListener('click', clickHandler); // body 2
// document.addEventListener('click', clickHandler); // html 3
// window.addEventListener('click', clickHandler); // сторінка 4

// btn.addEventListener('click', clickHandler, true); // button 4
// document.body.addEventListener('click', clickHandler, {capture: true}); // body 3
// document.addEventListener('click', clickHandler, true); // html 2
// window.addEventListener('click', clickHandler, true); // сторінка 1

// btn.addEventListener('click', clickHandler, true); // button 2
// document.body.addEventListener('click', clickHandler, {capture: false}); // body 3
// document.addEventListener('click', clickHandler); // html 4
// window.addEventListener('click', clickHandler, true); // сторінка 1

const divContainer = document.getElementById('btn-container');

divContainer.addEventListener('click', (e) => {
  // отримати кнопку на яку натиснув
  // tagName - назва тегу капсом
  if (e.target.tagName === 'BUTTON') {
    console.log(e.target.textContent);
  }
});

// divContainer.style = 'width: 300px; display: flex;';
// divContainer.style.backgroundColor = 'red';
// divContainer.style.border = '30px dotted green';

/*
  зробити дів з декількома кнопками
  у кожної кнопки текстом має бути назва кольору
  при натисканні на кнопку має змінитися фоновий колір діва на натиснутий
  обробник має бути тільки на одному елементі
*/

const colorTaskDiv = document.getElementById('color-task');

colorTaskDiv.addEventListener('click', (e) => {

  if(e.target.tagName !== 'BUTTON') {
    return;
  }

  colorTaskDiv.style.backgroundColor = e.target.textContent;

});

// const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  // зупиняє стандартну поведінку
  e.preventDefault(); 

  // припиняє подальше сплиття або занурення
  // e.stopPropagation();

  console.log('test');
});
