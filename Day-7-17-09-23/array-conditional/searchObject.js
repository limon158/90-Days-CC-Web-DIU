const products = [
  { serial: 1, productName: "iPhone 14 Pro phone", price: 122000 },
  { serial: 2, productName: "Macbook Air 2022", price: 146000 },
  { serial: 3, productName: "xiaomi 12 pro phone", price: 68000 },
  { serial: 4, productName: "HP Elitebook-3", price: 100000 },
  { serial: 5, productName: "Airpod 2nd gen", price: 24000 },
  { serial: 6, productName: "Suzuki Gixer", price: 280000 },
  { serial: 7, productName: "iPad Pro M1", price: 157000 },
];
// for(const product of products)
// {
//     console.log(product);
// }
function matchProduct(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.productName.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}
const result = matchProduct(products, "ipad");
console.log(result);
