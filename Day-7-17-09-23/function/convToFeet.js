// convert inch to feet

function getInchToFeet(inches) {
  const feets = inches / 12;
  return feets;
}

var heightTable = [60, 80, 144];
for (var i = 0; i < heightTable.length; i++)
 
{
  let inchHeight = heightTable[i];
  let feetHeight = getInchToFeet(inchHeight);
  console.log(feetHeight.toFixed(2), 'ft.');
}
