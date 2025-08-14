
// //                                                Array1

// function getLevel2(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(2 ** i);
//   }
//   return arr;
// }

// console.log(getLevel2(5));


// //                                                Array2

// function makeArray(n, A, B) {
//   let arr = [A, B];

//   for (let i = 2; i < n; i++) {
//     let sum = 0;
//     for (let j = 0; j < i; j++) {
//       sum += arr[j];
//     }
//     arr.push(sum);
//   }

//   return arr;
// }

// console.log(makeArray(5, 2, 3));


// //                                                Array3

// function reverseArray(arr) {
//   return arr.slice().reverse();
// }

// console.log(reverseArray(['ali', 2, 3, 4, 5]));


// //                                                Array4

// function getOdd(arr) {
//   let oddNumbers = [];
//   let soni = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//       oddNumbers.push(arr[i]);
//       soni ++
//     }
//   }
//   return `${ oddNumbers } toqlar soni = ${ soni }`;
// }

// console.log(getOdd([4, 5, 6, 7, 8, 9]));


// //                                                Array5

// function getEvenOdd(arr) {
//   let evens = [];
//   let odds = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evens.push(arr[i]);
//     } else {
//       odds.push(arr[i]);
//     }
//   }

//   odds.reverse();
//   console.log([...evens, ...odds].join(' '));
// }

// getEvenOdd([4, 5, 7, 8, 6, 9]);


// //                                                Array6

// function getEvenMassiv(n) {
//   for (let i = 0; i <= n; i += 2) {
//     console.log('A [',i,']');
//   }
// }

// getEvenMassiv(6);


//                                                Array7

function getTwo(arr) {
  for (let i = arr.length - 1; i >= 0; i -= 2) {
    console.log(arr[i]);
    
  }
}

getTwo([4, 5, 7, 8, 6, 9]);