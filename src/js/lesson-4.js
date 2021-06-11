'use strict';

//1.	Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки. Придумать шаблон, который заменяет одинарные кавычки на двойные.

let text1 = document.querySelector('.text1').innerText;
let newText1 = text1.replace(/'/g, '"');
document.querySelector('p').innerText = newText1;


// 2.	Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.

let text2 = document.querySelector('.text2').innerText;
let newText2 = text2.replace(/\B'|'\B/g, '"');
document.querySelector('.text2').innerText = newText2;


// 3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить. При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
// a. Имя содержит только буквы.
// b. Телефон имеет вид +7(000)000-0000.
// c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
// d. Текст произвольный.
// e. Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой и сообщить пользователю об ошибке.


// let btn = document.querySelector('button[type=submit]');
// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   let userName = document.querySelector('.user-name');
//   let userPhone = document.querySelector('.user-phone');
//   let userMail = document.querySelector('.user-mail');
//   let userMesage = document.querySelector('.user-mesage');
//   let errorName = document.querySelector('.error-name');
//   let errorPhone = document.querySelector('.error-phone');
//   let errorMail = document.querySelector('.error-mail');
//   let errorMesage = document.querySelector('.error-mesage');
//   let sucsess = document.querySelector('.sucsess');

//   if (userName.value.match(/^[A-ZА-ЯЁ]{1}[a-zа-яё]+$/)) {
//     removeError(userName, errorName);
//     if (userPhone.value.match(/[\+7]\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/)) {
//       removeError(userPhone, errorPhone);
//       if (userMail.value.match(/^[a-zа-я0-9-\._]+@[a-z0-9-_]+\.[a-z0-9-_]{2,6}/iu)) {
//         removeError(userMail, errorMail);
//         if (userMesage.value.length >= 1) {
//           removeError(userMesage, errorMesage);
//           sucsess.style.display = "block";
//         } else {
//           addError(userMesage, errorMesage);
//         }
//       } else {
//         addError(userMail, errorMail);
//       }
//     } else {
//       addError(userPhone, errorPhone);
//     }
//   } else {
//     addError(userName, errorName);
//   }
// });

// function addError(elem, err) {
//   err.classList.remove('error');
//   elem.style.borderColor = "red";
// }

// function removeError(elem, err) {
//   err.classList.add('error');
//   elem.style.borderColor = 'inherit';
// }