// синхронний код
// console.log(1);
// console.log(2);

// // for(let i = 0; i < 10; i--) {
// //   console.log('iteration');
// // }

// let j = 0;

// for(let i = 0; i < 1000000000; i++) {
//   // console.log('iteration');
//   j++;
// }

// // async
// setTimeout(function callback () {
//   console.log('5 sec');
// }, 5000);

// console.log(3);
// console.log(4);

// const btn = document.querySelector('#btn');

// btn.addEventListener('click' , (e) => {
//   // async arrow
//   console.log('started');

//   for(let i = 0; i < 1000000000; i++) {
//     // console.log('iteration');
//     j++;
//   }

//   console.log('You are logged in');
// });


// console.log('first'); // 1

// console.log('second'); // 2

// const timeoutId = setTimeout(() => {
//   console.log('third'); // 5
// }, 0);

// clearTimeout(timeoutId); // скидання таймаута, синхронна

const intervalId = setInterval(() => {
  console.log('interval');
}, 1000);

// clearInterval(intervalId); // скидання інтервалу, синхронна

// setTimeout(() => {
//   console.log('fourth'); // 4
// }, 0);

// console.log('final'); // 3
