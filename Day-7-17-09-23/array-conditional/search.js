const numbers = [1, 5, 2 , 6, 9, 18];
for(let i = 0; i < numbers.length; i++)
{
    const number = numbers[i];
    console.log(number);
}
console.log('another way');
for(const number of numbers)
{
    console.log(number);
}