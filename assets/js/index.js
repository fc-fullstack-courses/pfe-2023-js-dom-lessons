// отримання доступу до DOM

// window - об'єктне уявлення браузера

// window.document - DOM
// document - DOM

console.dir(document);

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
const buttons = document.getElementsByTagName('button');
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

const taskBtn = document.getElementsByTagName('button')[0];

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

taskBtn.addEventListener('click', createClickHandler());

// пошук елемента у ДОМ - дереві
/*
document.getElementsByTagName('div') - шукає усі елементи з указаним тегом і кладе іх у псевдомасив (є ітератор)
* document.getElementById('someId') - повертає перший елемент з вказаним айді
document.getElementsByClassName('className') - шукає усі елементи з указаним класом
document.getElementsByName('name') - шукає усі елементи з указаним атрибутом name

* document.querySelector('#div.btn > span') - повертає перший елемент який задовільняє вказаному css селектору
document.querySelectorAll('#div.btn > span') - повертає всі елементи які задовільняють вказаному css селектору
*/

const h1 = document.querySelector('section > h1');

const img = document.querySelector('section+img');
const img2 = document.querySelector('img[alt="Find ME"]');

const p = document.querySelector('.section > p');