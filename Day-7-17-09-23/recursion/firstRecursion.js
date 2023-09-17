// Recursion
function sum(i)
{
    if(i == 1)
    {
        return 1;
    }
    return i + sum(i - 1);
}
const input = 5;
const output = sum(input);
console.log(output);