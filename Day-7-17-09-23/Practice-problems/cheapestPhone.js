// find cheapest phone from some object;
function findCheapest(phones)
{
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++)
    {
        const phone = phones[i];
        if(phones.price < cheapest.price)
        {
            cheapest = phone;
        }
    }
    return cheapest;
}

const phones = [
    {brand: 'realme', camera: '50MP', ram: '4GB', rom: '64GB', price: 19900 },
    {brand: 'xiaomi', camera: '48MP', ram: '4GB', rom: '128GB', price: 22000 },
    {brand: 'oppo', camera: '64MP', ram: '4GB', rom: '128GB', price: 40000 },
    {brand: 'vivo', camera: '20MP', ram: '4GB', rom: '64GB', price: 60000 },
    {brand: 'samsung', camera: '108MP', ram: '4GB', rom: '256GB',  price: 120000 }
];
const cheapestPhone = findCheapest(phones);
console.log(cheapestPhone);