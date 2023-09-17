// sum array
function getSumAll(numbers) 
{
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if(number % 2 != 0)
    {
        sum += number;
    }
  }
  console.log(sum);
}
let numberTable = [34, 53, 55, 57, 67];
getSumAll(numberTable);