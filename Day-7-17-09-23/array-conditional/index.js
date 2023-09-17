var numbers = [10, 12, 34, 44, 54];
var second = numbers[2];
numbers[1] = 100;
console.log(numbers);
console.log(numbers[3]);
console.log(second);
console.log(numbers[1]);
// find index of an element
var positionIndex = numbers.indexOf(10);
console.log(positionIndex);