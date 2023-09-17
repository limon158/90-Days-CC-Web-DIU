function getDifferntCalculation(numbers)
{
    let evenNumbers = [];
    let oddNumbers = [];
    let sum = 0;
    for(let i = 0; i < numbers.length; i++)
    {
        const element = numbers[i];
        sum += element;
        if(element % 2 === 0)
        {
           evenNumbers.push(element);
        }
        else
        {
            oddNumbers.push(element);
        }
    }
    console.log(sum);
    console.log(evenNumbers);
    console.log(oddNumbers);
}
var numberTable = [1, 2, 3, 5, 6, 7, 9, 12, 15];
getDifferntCalculation(numberTable);