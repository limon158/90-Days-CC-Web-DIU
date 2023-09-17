// calculate total price of added cart.
function totalCost(products)
{
    let sum = 0;
    for(let i = 0; i < products.length; i++)
    {
        const product = products[i];
        sum += product.price;
    }
    return sum;
}
const carts = [
    {name: 'shirt', price: 400},
    {name: 'pant', price: 450},
    {name: 'shoe', price: 600},
    {name: 'belt', price: 750}
];
const expense = totalCost(carts);
console.log(expense);
