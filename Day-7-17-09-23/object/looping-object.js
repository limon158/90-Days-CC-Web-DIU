var shopingCart = {
  phone: 4,
  charger: 3,
  earphone: 6,
  backCover: 5
}
const keys = Object.keys(shopingCart);
console.log(keys);
const values = Object.values(shopingCart);
console.log(values);
// console.log(keys.length);
// var length = keys.length;
// for (var i = 0; i < keys.length; i++) {
//   console.log(keys[i]);
// }
for(var i = 0; i < keys.length; i++)
{
    var propertyName = keys[i];
    var propertyValue = shopingCart[propertyName];
    // console.log(propertyName, propertyValue);
}
// for in loop
for(var propertyName in shopingCart)
{
    const values = shopingCart[propertyName];
    console.log(propertyName, values);
}