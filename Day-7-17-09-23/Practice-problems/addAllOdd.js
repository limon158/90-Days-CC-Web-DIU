// a program to add all odd number from array
function getSumAllOdd(numbers) {
  let sum = 0;
  let number = 0;
  for (let i = 0; i < numbers.length; i++) {
    number = numbers[i];
    if (number % 2 != 0) {
      sum += number;
    }
  }
  return sum;
}
var numberTAble = [1, 2, 4, 5, 6, 7, 8];
getSumAllOdd(numberTAble);
