//find factorial
function getFactorialFor(number)
{
    //using for loop
    let result = 1;
    for(let i = number; i >= 1; i--)
    {
        result *= i;
    }
    return result;
}
function getFactorialWhile(number)
{
    let i = number;
    let result = 1;
    while(i >= 1)
    {
        result *= i;
        i--;
    }
    return result;
}
const resultFor = getFactorialFor(8);
const resultWhile = getFactorialWhile(7)
console.log(resultFor);
console.log(resultWhile);