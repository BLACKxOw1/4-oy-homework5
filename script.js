
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


// //                                                Array7

// function getTwo(arr) {
//   for (let i = arr.length - 1; i >= 0; i -= 2) {
//     console.log(arr[i]);
//   }
// }

// getTwo([4, 5, 6, 7, 8, 9]);


// //                                                Array8

// function getMassiv(arr) {
//   let juft = []
//   let toq = []

//   for (let i = 0; i <= arr.length - 1; i += 2) {
//     juft += arr[i]
//   }
//   for (let i = 1; i < arr.length; i += 2) {
//     toq += arr[i]
//   }
//   return [{ juft }, { toq }]
// }

// console.log(getMassiv([0, 1, 2, 3, 4, 5, 6]));


// //                                                Array9

// function getMassiv(arr) {
//   let juft = []
//   let toq = []

//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//       toq.push(arr[i])
//     }
//   }
//   for (let i = arr.length; i >= 0; i--) {
//     if (arr[i] % 2 === 0) {
//       juft.push(arr[i])
//     }
//   }

//   return [toq, juft]
// }

// console.log(getMassiv([0, 1, 2, 3, 4, 5, 6]));


// //                                                Array10

// function getMassiv(arr) {
//   let newMassiv = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= 0) {
//       newMassiv.push(arr[i])
//     }else{
//       newMassiv.push(arr[i],arr[i])
//     }
//   }
//   return newMassiv
// }

// console.log(getMassiv([0, 1, 2, 3, 4, 5, 6]));


// //                                                Array11

// function rangeOutSum(arr) {
//   let L = 9
//   let K = 5
//   let newMassiv = []
//   if ((0 <= K && K <= L) && (L < arr.length)) {
//     for (let i = 0; i < arr.length; i++) {
//       if ((arr[i] < K && arr[i] < L) || (arr[i] > K && arr[i] > L)) {
//         newMassiv.push(arr[i])
//       }
//     }
//   }
//   return newMassiv
// }

// let app = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

// console.log(rangeOutSum(app));


// //                                                Array12

// function rangeOutSum(arr) {
//   let truthy = [];
//   let falsy = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//       truthy.push(arr[i]);
//     } else {
//       falsy.push(arr[i]);
//     }
//   }

//   return { truthy, falsy };
// }

// let arr = [10, false, "", "Abdulaziz", null, 0, undefined, NaN];

// console.log(rangeOutSum(arr));


// //                                                Array13

// function getOddMin(arr) {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result.push(arr[i])
//     }
//   }
//   return `eng kichik juft son: ${result[0]}`
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(getOddMin(arr));


// //                                                Array14

// function getEvenMax(arr) {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//       result.push(arr[i])
//     }
//   }
//   return `eng katta toq son: ${result[result.length - 1]}`
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(getEvenMax(arr));


// //                                                Array15

// function getEvenMax(arr) {
//   let result = []
//   for (let i = arr.length; i >= 0; i--) {
//     if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
//       result.push(arr[i])
//     }
//   }
//   if (result[0] === undefined) {
//     return 'sonlar bir-biriga mos kelmaydi'
//   } else {
//     return `Lokal maksimum son: ${result[0]}`
//   }
// }

// let arr = [1, 2, 3000, 4, 5, 6, 280, 28, 9, 10]

// console.log(getEvenMax(arr));


// //                                                Array16

// function getClose(arr, R) {
//   let closest = arr[0];
//   let minDiff = Math.abs(arr[0] - R);

//   for (let i = 1; i < arr.length; i++) {
//     let diff = Math.abs(arr[i] - R);
//     if (diff < minDiff) {
//       minDiff = diff;
//       closest = arr[i];
//     }
//   }

//   return closest;
// }

// let arr = [1, 2, 3000, 280, 28, 9, 10];
// console.log(getClose(arr, 6));


// //                                                Array17

// function getMaxInt(arr) {
//   if (arr.length < 2) return null;

//   let Yigindi = arr[0] + arr[1];
//   let juftlik = [arr[0], arr[1]];

//   for (let i = 1; i < arr.length - 1; i++) {
//     let sum = arr[i] + arr[i + 1];
//     if (sum > Yigindi) {
//       Yigindi = sum;
//       juftlik = [arr[i], arr[i + 1]];
//     }
//   }

//   return { juftlik, Yigindi };
// }

// let arr = [1, 2, 3000, 4, 5, 6, 280, 28, 9, 10];
// console.log(getMaxInt(arr));


// //                                                Array18

// function getIndexInt(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let firstIndex = arr.indexOf(arr[i]);
//     let lastIndex = arr.lastIndexOf(arr[i]);

//     if (firstIndex !== lastIndex) {
//       return [firstIndex, lastIndex];
//     }
//   }
//   return null;
// }

// let arr = [4, 7, 1, 9, 3, 7, 5];
// console.log(getIndexInt(arr));


// //                                                Array19

// function getSon(arr) {
//   let maxCount = 0;
//   let mostFrequent;

//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }

//     if (count > maxCount) {
//       maxCount = count;
//       mostFrequent = arr[i];
//     }
//   }

//   return { element: mostFrequent, count: maxCount };
// }

// let arr = [4, 7, 1, 9, 7, 3, 7, 5, 1, 1, 1];
// console.log(getSon(arr));


// //                                                Array20

// function getEvenArray(a) {
//   let b = a.filter(x => x % 2 === 0);

//   let count = b.length;

//   let elementsStr = b.join(", ");

//   return `b massiv elementlar soni: ${count} \nb massiv elementlari: ${elementsStr}`;
// }

// let a = [4, 7, 1, 8, 3, 6, 2, 9, 10];
// console.log(getEvenArray(a));


// //                                                Array21

// function getIncrease(a, k) {
//   let result = [];

//   for (let i = 0; i < a.length; i++) {
//     result.push(a[i] + k);
//   }

//   return result;
// }

// let a = [1, 2, 3, 4, 5];
// let k = 3;
// console.log(getIncrease(a, k));


// //                                                Array22

// function getReversed(arr) {
//   let n = arr.length;
//   if (n % 2 !== 0) {
//     return "Massiv uzunligi juft bo‘lishi kerak!"
//   }

//   let half = n / 2;

//   let [firstHalf, secondHalf] = [arr.slice(0, half), arr.slice(half)];

//   let almashgan = [...secondHalf.map(x => x), ...firstHalf.map(x => x)];

//   return {
//     original: arr,
//     almashgan
//   };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(getReversed(arr));


// //                                                Array23

// function reverseArray(arr) {
//   let n = arr.length;

//   for (let i = 0; i < Math.floor(n / 2); i++) {
//     let temp = arr[i];
//     arr[i] = arr[n - 1 - i];
//     arr[n - 1 - i] = temp;
//   }

//   return arr;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(reverseArray(arr));


//                                                Array24

function reverseArray(arr) {
  let n = arr.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[n - 1 - i];
    arr[n - 1 - i] = temp;
  }

  return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(reverseArray(arr));