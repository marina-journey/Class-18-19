// const fib = (x = 0) => {
//   if (x <= 1) return 1;
//   return fib(x - 1) + fib(x - 2); 
// };

// // console.log(fib(40));

// const obj = {
//   fib: function (x) {
//     console.log(this);
//     fib(x) 
//   }
// }

// const decorator = (fnc) => {
//   const cache = new Map();
//   return (x) => {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }

//     cache.set(x, fnc(x));

//     return cache.get(x);
//   };
// };

// const memoizedFib = decorator(fib);

// console.log(memoizedFib());

// class19

const units = [new Unit('Virus', 200, 500)];

units.push(units[0].clone());
console.log(units);

const squad = new Squad(units);

console.log(squad);
