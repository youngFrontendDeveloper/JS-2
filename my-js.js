'use strict';

// console.log('+7 117 963 45 86'.match(/\d/g).join(''));

//Граница слова

console.log('Язык JavaScript'.match(/\bjava/i)); //java на границе слова
console.log('Язык JavaScript'.match(/\Bjava/i)); //java не на границе слова

console.log('Язык JavaScript'.match(/\djava/i)); //java в начале строки
console.log('Язык JavaScript'.match(/\Djava/i)); //java не в начале строки
console.log('Язык JavaScript назван так от языка Java'.match(/\Djava | java\D/gi)); //java не в начале строки или не в конце строки


let str = "'Java script don't easy lingvo'";

let newStr = str.replace(/\B'/g, ' "').replace(/'\B/g, '" ');
console.log(newStr);


