// // Examples 1:
// const greeting = () => {
//     return "Hello"
// }

// const sayHello = (func, name) => {
//     return func() + ' ' + name
// }

// const result = sayHello(greeting, 'Ikrom') // berilyotgan argumentlar cheksiz bo'lishi mumkin
// console.log(result)

// // Examples 2:
// function sayHello() {
//     return () => {
//       return ("Hello!");
//     };
//   }
  
//   console.log(sayHello()())

// Examples 3:

// const foo = () => {
//     console.log("foobar");
//   };
  
//   foo(); // bu yerda funcksiya o'zgaruvchi nomi orqali ishga tushirilyapti;

/*------------------------------------------ */

// const movies = [
//     {
//       name: "Spider-Man: Across The Spider-Verse",
//       year: 2023,
//       rate: 8.8,
//       genre: ["Adventure", "Action", "Comedy"],
//       country: ["United States"],
//       isAdult: false,
//     },
//     {
//       name: "The Godfather",
//       year: 1972,
//       rate: 9.2,
//       genre: ["Mafia", "Crime Film", "Drama"],
//       country: ["United States", "Italy"],
//       isAdult: true,
//     },
//     {
//       name: "T-34",
//       year: 2018,
//       rate: 5.9,
//       genre: ["Adventure", "Drama", "War", "Action"],
//       country: ["Russia"],
//       isAdult: true,
//     },
//     {
//       name: "Parasite",
//       year: 2019,
//       rate: 7.5,
//       genre: ["Adventure", "Drama", "War", "Action"],
//       country: ["South Korea"],
//       isAdult: true,
//     },
//     {
//       name: "Titanic",
//       year: 1997,
//       rate: 7.5,
//       genre: ["Adventure", "Drama", "Thriller", "Comedy"],
//       country: ["United States", "England"],
//       isAdult: true,
//     },
//     {
//       name: "Paddington",
//       year: 2014,
//       rate: 4.5,
//       genre: ["Adventure", "Fantasy", "Animation", "Comedy"],
//       country: ["France", "England"],
//       isAdult: false,
//     },
//   ];

// Examples:
// let arr1 = [10, 20, [30, 40, 50], [60, 70, 80, 90], 100];
// let arr2 = [10, 20, [30, [40, 50]], [[60, 70, 80], 90], 100];
// let arr3 = [10, 20, [30, [40, 50]], [[[60, 70], 80], 90], 100];

// let employee = [
//     {id: 101, name: 'John', skills: ['HTML', 'CSS', 'JAVASCRIPT']},
//     {id: 101, name: 'John', skills: ['C#', 'SQL']},
//     {id: 101, name: 'John', skills: ['ANGULAR', 'REACT']}
// ];

/* -------------------------------------- */

// Example:
// function that returns a new array
// function createArray(arraylike, mapFunc) {
//     return Array.from(arraylike, mapFunc);
//   }
  
//   // using arrow function for mapFunc
//   let result = createArray([2, 4, 6], (element) => element + 2);
  
//   console.log(result);

/* -------------------------------------- */

// Examples:

// let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
// let uniqueAgeGroup = ageGroup.reduce(function (accumulator, currentValue) {
//   if (accumulator.indexOf(currentValue) === -1) {
//     accumulator.push(currentValue);
//   }
//   return accumulator;
// }, []);

// console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]

/* ------------------------------------- */

// Examples:

const array = [15, 16, 17, 18, 19];

const sumNumbers = array.reduce((accumulator, currentValue, index) => {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
});

console.log(sumNumbers)



