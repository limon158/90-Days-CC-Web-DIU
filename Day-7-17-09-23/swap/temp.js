// use of teporary variable
let first = 5;
let second = 6;
console.log('first:', first, 'second:', second);
let temp = first;
first = second;
second = temp;
;
console.log('first:', first, 'second:', second);
// // use distructure
[first, second] = [second, first];
console.log('first:', first, 'second:', second);
