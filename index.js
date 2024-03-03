// EXAMPLE 1 - Check if a String starts with a Number using JavaScript

// ✅ Check if a string starts with a number
function startsWithNumber(str) {
  return /^\d/.test(str);
}

console.log(startsWithNumber('avocado 123')); // 👉️ false
console.log(startsWithNumber('456 avocado')); // 👉️ true
console.log(startsWithNumber('0.3 abc')); // 👉️ true

// // -------------------------------------------------------

// // ✅️ Get the number from the start of the string
// function getNumberAtStart(str) {
//   if (startsWithNumber(str)) {
//     return Number(str.match(/^\d+/)[0]);
//   }

//   return null;
// }

// console.log(getNumberAtStart('avocado 123')); // 👉️ null
// console.log(getNumberAtStart('456 avocado')); // 👉️ 456
// console.log(getNumberAtStart('0.3 abc')); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the number at the start of a String

// function startsWithNumber(str) {
//   return /^\d/.test(str);
// }

// function getNumberAtStart(str) {
//   if (startsWithNumber(str)) {
//     return Number(str.match(/^\d+/)[0]);
//   }

//   return null;
// }

// console.log(getNumberAtStart('avocado 123')); // 👉️ null
// console.log(getNumberAtStart('456 avocado')); // 👉️ 456
// console.log(getNumberAtStart('0.3 abc')); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a String ends with a Number in JavaScript

// // ✅ Check if a String ends with a Number
// function endsWithNumber(str) {
//   return /[0-9]+$/.test(str);
// }

// console.log(endsWithNumber('hello 123')); // 👉️ true
// console.log(endsWithNumber('123 apple')); // 👉️ false
// console.log(endsWithNumber('test 0.5')); // 👉️ true

// // -----------------------------------------------------

// // ✅ Get the number at end of the string
// function getNumberAtEnd(str) {
//   if (endsWithNumber(str)) {
//     return Number(str.match(/[0-9]+$/)[0]);
//   }

//   return null;
// }

// console.log(getNumberAtEnd('hello 123')); // 👉️ 123
// console.log(getNumberAtEnd('123 apple')); // 👉️ null
// console.log(getNumberAtEnd('test 0.5')); // 👉️ 5

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get the number from the end of a string

// function endsWithNumber(str) {
//   return /[0-9]+$/.test(str);
// }

// function getNumberAtEnd(str) {
//   if (endsWithNumber(str)) {
//     return Number(str.match(/[0-9]+$/)[0]);
//   }

//   return null;
// }

// console.log(getNumberAtEnd('hello 123')); // 👉️ 123
// console.log(getNumberAtEnd('123 apple')); // 👉️ null
// console.log(getNumberAtEnd('test 0.5')); // 👉️ 5
