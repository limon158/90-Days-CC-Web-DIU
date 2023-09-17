// 1. display 1-50;
// 2. that number divisable 3 disply foo instate of the number
// 3. that number divisavle 5 display bar instate of the number
// 4. that number divisable both 3 and 5 display foobar instate of the number
for(let i = 1; i <= 50; i++)
{
    if(i % 3 === 0 && i % 5 === 0)
    {
        console.log('foobar');
    }
    else if(i % 3 === 0)
    {
        console.log('foo');
    }
    else if(i % 5 === 0)
    {
        console.log('bar');
    }
    else
    {
        console.log(i);
    }
}