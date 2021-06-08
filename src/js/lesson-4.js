'use strict';

//1.	Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки. Придумать шаблон, который заменяет одинарные кавычки на двойные.

let text1 = document.querySelector('.text1').innerText;
let newText1 = text1.replace(/'/g, '"');
document.querySelector('p').innerText = newText1; 


// 2.	Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.

let text2 = document.querySelector('.text2').innerText;
let newText2 = text2.replace(/\B'|'\B/g, '"');
document.querySelector('.text2').innerText = newText2;