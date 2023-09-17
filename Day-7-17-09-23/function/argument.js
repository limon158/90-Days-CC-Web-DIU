// Arguments
function add(a, b, c)
{
    console.log(arguments);
    console.log(a , b, c, '=', a + b + c);
}
add(2, 4, 5, 6, 7, 8);
