// find sum of all odd numbers
function getSumAllOdd(numbers)
{
    let sum = 0;
    for(let i = 0; i < numbers.length; i++)
    {
        let index = i;
        let element = numbers[index];
        if(element % 2 !== 0)
        {
            //console.log(index, element);
            sum += element;
        }
        //console.log(index, element, sum);
    }
    //return sum;
    console.log(sum);
}
let numberTable = [1, 3, 5, 6, 8];
getSumAllOdd(numberTable);