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
  if (e.target.tagName !== 'BUTTON') {
    return;
  }

  colorTaskDiv.style.backgroundColor = e.target.textContent;
});

// const form = document.querySelector('#form');

// form.addEventListener('submit', (e) => {
//   // зупиняє стандартну поведінку
//   e.preventDefault();

//   // припиняє подальше сплиття або занурення
//   // e.stopPropagation();

//   console.log('test');

//   console.dir(e.target); // form

//   console.log(e.target.elements); // всі інтерактивні елементи форми

//   const input = e.target.elements.thisIsName;

//   console.dir(input);

//   console.log(input.value); // текст в інпуті (завжди рядок)
//   console.log(input.textContent); // пустий
// });

/*
  зробити форму з інпутом кнопкою відправки і параграфом
  користувач в інпуті має вказати число
  коли він відправить форму у параграфі має вивести число в квадраті

  * якщо користувач вводить некоректне число, то в параграфі написати щоб він ввів щось нормлаьне
  і зробити текст параграфа червоним, текст має бути червоним тільки тоді, коли введені некоректні дані
  * після відправки форми підчистити її (не залишати в інпуті дані)
*/

const form2 = document.getElementById('form');
const paragraf = document.querySelector('#result-p');

form2.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputVal = e.target.elements.number.value;

  if (!isNaN(inputVal) && inputVal.trim() !== '') {
    paragraf.style.color = 'black';
    paragraf.textContent = `Double of your input is ${inputVal ** 2}`;
  } else {
    paragraf.textContent = `Error input correct type (number)`;
    paragraf.style.color = 'red';
  }

  // e.target.elements[0].value = '';
  e.target.reset();
});

const img = document.getElementById('img');

// img.alt = 'some alt';
// img.src = 'https://imageio.forbes.com/specials-images/imageserve/6064b148afc9b47d022718d1/Hennessey-Venom-F5/960x0.jpg?height=473&width=711&fit=bounds';

// встановлення атрибутів
paragraf.setAttribute('title', 'Title from DOM');

// теж але через вузол
const parTitleNode = document.createAttribute('title');
parTitleNode.value = 'this will be title';
img.setAttributeNode(parTitleNode);

// отримати значення атрибута
const paragrafTitle = paragraf.getAttribute('title');
// console.log(paragrafTitle);

// через вузол
const imgTitleNode = img.getAttributeNode('title');
// console.log(imgTitleNode.value);

/*
  створіть картинку і кнопку в html
  також збережіть у масиві 2 посилання на картинки (src)
  при натисканні на кнопку у картинки має змінюватися src
  на 1 з 2 посиланнь

  * у масиві тепер зберігати і src і alt до картинки і замінювати їх одночасно
*/

const carImg = document.getElementById('carImg');
const carSwitchBtn = document.getElementById('carBtn');

const imgDataArr = [
  'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg',
  'https://imageio.forbes.com/specials-images/imageserve/6064b148afc9b47d022718d1/Hennessey-Venom-F5/960x0.jpg?height=473&width=711&fit=bounds',
];

// const srcNode = document.createAttribute('src');
// srcNode.value = imgDataArr[0];
// carImg.setAttributeNode(srcNode);

// const altNode = document.createAttribute('altNode');
// srcNode.value = imgDataArr[0];
// carImg.setAttributeNode(srcNode);

// carSwitchBtn.addEventListener('click', (e) => {
//   const currentSrc = carImg.getAttribute('src');

//   if(currentSrc === imgDataArr[0]) {
//     carImg.setAttribute('src', imgDataArr[1]);
//   } else {
//     carImg.setAttribute('src', imgDataArr[0]);
//   }
// });

// carSwitchBtn.addEventListener('click', (e) => {
//   // if(srcNode.value === imgDataArr[0]) {
//   //   srcNode.value = imgDataArr[1];
//   // } else {
//   //   srcNode.value = imgDataArr[0];
//   // }

//   // const isFirstSrc = srcNode.value === imgDataArr[0];
//   // srcNode.value = isFirstSrc ? imgDataArr[1] : imgDataArr[0];

//   const isFirstSrc = carImg.src === imgDataArr[0];
//   carImg.src = isFirstSrc ? imgDataArr[1] : imgDataArr[0];
// });

const imgDataArr2 = [
  {
    src: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg',
    alt: 'red car',
  },
  {
    src: 'https://imageio.forbes.com/specials-images/imageserve/6064b148afc9b47d022718d1/Hennessey-Venom-F5/960x0.jpg?height=473&width=711&fit=bounds',
    alt: 'black car',
  },
];

const srcNode = document.createAttribute('src');
srcNode.value = imgDataArr2[0].src;
carImg.setAttributeNode(srcNode);

const altNode = document.createAttribute('alt');
altNode.value = imgDataArr2[0].alt;
carImg.setAttributeNode(altNode);

carSwitchBtn.addEventListener('click', (e) => {
  const isFirstPic = srcNode.value === imgDataArr2[0].src;
  srcNode.value = isFirstPic ? imgDataArr2[1].src : imgDataArr2[0].src;
  altNode.value = isFirstPic ? imgDataArr2[1].alt : imgDataArr2[0].alt;
});

const dataBtn = document.getElementById('dataBtn');

dataBtn.addEventListener('click', (e) => {
  // const dataKeyText = dataBtn.getAttribute('data-key');

  // dataset - об'єкт у який складають усі атрибутиякі починаться з data-
  console.log(dataBtn.dataset);

  console.log(dataBtn.dataset.key);
  console.log(dataBtn.dataset.someLongName);
});

/*
  зробити дів з декількома кнопками
  у кожної кнопки текстом 
  має бути назва кольору українською
  при натисканні на кнопку 
  має змінитися фоновий колір діва 
  на натиснутий
*/

const dataColorDiv = document.getElementById('data-color-task');

dataColorDiv.addEventListener(
  'click',
  ({
    target: {
      tagName,
      dataset: { bgColor },
    },
  }) => {
    if (tagName !== 'BUTTON') {
      return;
    }

    dataColorDiv.style.backgroundColor = bgColor;
  }
);

const root = document.getElementById('root');

// створення елементів через DOM
const elem = document.createElement('div');

// наповнення даними
elem.textContent = 'I am from DOM';
elem.setAttribute('title', 'asdjsadsad');

// відображення елементу на сторінці

// var 1
// root.appendChild(elem);

// var 2
// root.append(elem, elem);
// document.body.append(elem); // буде саме тут

/*
  створити формочку з текстовим інпутом і кнопкою
  при відправки форми створити параграф з текстом який був у інпуті
  і покласти цей параграф у кінець body
*/

const hometaskForm = document.getElementById('home-form');

hometaskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputText = e.target.elements.text.value;

  if (inputText !== '') {
    const newP = document.createElement('p');
    newP.textContent = inputText;
    document.body.append(newP);

    e.target.reset();
  }
});

// самовидалення елемента
// elem.remove();

// видалення вузла у іншого вузла
// parentNode.removeChild(childNode);

/*
  створити кнопку яка при натисканні на себе буде видаляти себе
*/

const selfDestructBtn = document.getElementById('selfDestructBtn');

selfDestructBtn.addEventListener('click', (e) => {
  // selfDestructBtn.remove();
  // e.currentTarget.remove();
  e.target.remove();
});

// робота з класами елемента

// заміна класів напряму
hometaskForm.className = 'bigText redBorder';

// методи додавання / прибирання класів
root.classList.add('bigText', 'redBorder'); // додавання класів до існуючих
root.classList.remove('root-2', 'redBorder'); // видаляє вказані класи
root.classList.toggle('test'); // "перемикає" клас
