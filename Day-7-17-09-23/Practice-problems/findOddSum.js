//find sum of all odd number from given numbers
function getOddSum(product) 
{
  let sum = 0;
  for (let i = 0; i < product.lenth; i++) 
  {
    let element = product[i];
    sum = sum + element;
  }
  console.log(sum);
}
let numberTable = [34, 35, 68, 77, 71, 73];
getOddSum(numberTable);
