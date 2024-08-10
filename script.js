/*const sum =(num1)=>{
    let num2 = 10;
    let total = num1 + num2;

    const sum2=(num3)=>{
        return total + num3;
    }

    return sum2;
}

let a = sum(10);

console.log(a(10));
console.log(a)


let n = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    if(i === 0 || i === n - 1) {
      string += "*";
    }
    else {
      if(j === 0 || j === n - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);

*/

// (function () {
//   try {
//       throw new Error();
//   } catch (x) {
//       var x = 1;
//       var y = 2;
//       console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();

// const a =9;
// function test() {
//     const a =20;
//     console.log(a, 'inside')
// }
//     console.log(a, 'outside')
// test()

// console.log(console.log(10))

// function reverse(n) {
//   var reversed_num = 0;
//   while (n != 0) {
//     reversed_num = reversed_num * 10 + n % 10;
//     n = Math.floor(n / 10);
//   }
//   return reversed_num;
// }

// console.log(reverse(12345));

// console.log(11234%10);

// let arr = [2,4,6,45,6,7,8]

// function getHighstNum(arr){
//   let hignNum = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(hignNum < arr[i]){
//       hignNum = arr[i];
//     }
//   }
//   return hignNum
// }

// console.log(getHighstNum(arr))

// arr = [88, 2, 7, 99, 1, 0, 56];

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log("Before sorting: ", arr);
// console.log("After sorting: ", bubbleSort(arr));

// console.log('using sort',arr.sort((a,b)=> a-b));
// console.log('reverse sort',arr.sort((a,b)=>(b-a)))

// let string =''

// let rows = 5;

// for(let row = 1;row <=rows;row++){
//   for(let space = 1; space <= rows -row+1; space++){
//     string +=' '
//   }
//   for(let col = 1; col<=row;col++){
//     string+=" "+row
//   }
//   string+='\n'
// }

// console.log(string)

// (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1, y = 2;
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();

// function outer(){
//        var b = 2
//     function inner(){
//         b++;
//         console.log(b)
//         var b = 3;

//     }
//     inner();
// }
// outer();

// console.log(console.log('test'));

// let arr = ["flower", "flow", "flight"];

// function commonPreFix() {
//   arr.sort();
//   const firstString = arr[0];
//   const lastString = arr[arr.length - 1];

//   let preFix = "";
//   for (let i = 0; i < firstString.length; i++) {
//     if (firstString.charAt(i) === lastString.charAt(i)) {
//       preFix += firstString.charAt(i);
//     }
//   }
//   return preFix;
// }

// console.log(commonPreFix(arr));

// let n = 5;

// let string = "";

// for (let i = 0; i < n; i++) {

//   for (let j = 0; j < n; j++) {

//     if (i === 0 || i === n - 1) {
//       string += "*";
//     } else {
//       if (j === 0 || j === n - 1) {
//         string += "*";
//       } else {
//         string += " ";
//       }
//     }
//   }

//   string += "\n";
// }
// console.log(string);

// let arr1 = [2, 3, 4, 5, 6];
// let arr2 = [4, 5, 6, 7]
// let maxLength = Math.max(arr1.length, arr2.length);

// let sumOfArr = []
// for(let i = 0; i < arr1.length; i++){
//   let value1 = arr1[i] || 0;
//   let value2 = arr2[i] || 0;
//   sumOfArr.push(value1 + value2)
// }
// console.log(sumOfArr)

// arr = [88, 2, 7, 99, 1, 0, 56];

// for(let i = 0; i < arr.length; i++){
//   for(let j = 0; j < arr.length - i - 1; j++){
//     if(arr[j] > arr[j+1]){
//      let temp = arr[j]
//       arr[j] = arr[j+1]
//       arr[j+1] = temp
//     }
//   }
// }
// console.log(arr)

// let findLeapYear = (year) => {
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// };

// console.log(findLeapYear(2020));

// array = ["a", 2, 3, "a", 4, "a", 2, "a", "a", "b", "c"];

// let countChar = (arr, ch) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (ch === arr[i]) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countChar(array, "a"));

// let arr1 = [2, 3, 4, 5, 6];
// let arr2 = [4, 5, 6, 7];

// const getSum = (arr1, arr2) => {
//   let findMaxArr = Math.max(arr1.length, arr2.length);
//   console.log(findMaxArr);
//   let sumOfArr = [];
//   for (let i = 0; i < findMaxArr; i++) {
//     let value1 = arr1[i] || 0;
//     let value2 = arr2[i] || 0;

//     sumOfArr.push(value1 + value2);
//   }
//   return sumOfArr;
// };

// console.log(getSum(arr1, arr2));

// const words = ["apple", "banana", "mango"];

// const findLongestWord = (arr) => {
//   let longestWord = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (longestWord.length < arr[i].length) {
//       longestWord = arr[i];
//     }
//   }
//   return longestWord;
// };

// console.log(findLongestWord(words));

// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// const findFizzBuzz = (numArr) => {
//   for(let i = 0; i < numArr.length; i++){
//     if(numArr[i] % 3 === 0 && numArr[i] % 5 === 0){
//       console.log("FizzBuzz");
//     }
//     else if(numArr[i] % 3 === 0){
//       console.log("Fizz")
//     }
//     else if(numArr[i] % 5 === 0){
//       console.log("Buzz")
//     }
//   }
// }

// findFizzBuzz(numbers)

// let words = ["flower", "flow", "flight"];

// const preFixWords = (words) => {
//   let firstWord = words[1];
//   let lastWord = words[words.length - 1]
//   preFix = ""
//   for(let i = 0; i < firstWord.length; i++){
//     if(firstWord.charAt(i) === lastWord.charAt(i)){
//       preFix += firstWord.charAt(i)
//     }
//   }
//   return preFix
// }

// console.log(preFixWords(words))

// let words = ["floweraaa", "flow", "flightss", "bananas", "apple", "orange"];

// const findSecondLongestWord = (words) => {
//   let longestWord = "";
//   let secondLongestWord = "";
//   for (let i = 0; i < words.length; i++) {
//     let currentWord = words[i];

//     if (currentWord.length > longestWord.length) {
//       secondLongestWord = longestWord;
//       longestWord = currentWord;
//     } else if (currentWord.length > secondLongestWord.length) {
//       secondLongestWord = currentWord;
//     }
//   }

//   return secondLongestWord;
// };

// console.log(findSecondLongestWord(words));


const rows = 5;
let string = "";
for(let row = 1; row <= rows; row++){

    for(let col = 1; col <= rows - row + 1; col++){
        string  += " "
    }

    for(let col = row; col >=1; col--){
        string += `${String.fromCharCode(col+64)} ` 
    }
    string+= "\n"
}

console.log(string)


