function getThatEven(product) 
{
  if (product % 2 == 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}

let productTable = [10, 13, 14, 18, 20, 21];
for (let i = 0; i < productTable.length; i++)
{
  getThatEven(productTable[i]);
}
