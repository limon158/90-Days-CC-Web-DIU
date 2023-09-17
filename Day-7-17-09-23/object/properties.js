var shopingCart = {
  monitor: 1,
  monitorBrand: "samsung",
  keyboard: 4,
  keyboardBrand: "iMice",
  mouse: 4,
  mouseBrand: "logiTech",
};
// find property values
var keyboardCount = shopingCart.keyboard;
var monitorCount = shopingCart['monitor'];
console.log(shopingCart);
console.log(shopingCart.keyboardBrand);
console.log(keyboardCount);
console.log(monitorCount);
var properties = Object.keys(shopingCart);
var propertyValues = Object.values(shopingCart);
console.log(properties);
console.log(propertyValues);
var propertyName = 'mouseBrand';
var propertyValue = shopingCart[propertyName];
console.log(propertyName, propertyValue);
// set property values
shopingCart.monitorBrand = "lenovo";
shopingCart["mouse"] = 15;
console.log(shopingCart);
shopingCart[propertyName] = 55;
console.log(shopingCart);
