// check given years is leap year or not if leap year 'true' not leap year 'false'
function getThatLeapYear(product) {
  if (product % 4 == 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
let yearTable = [2022, 2024, 2026, 2030];
for (let i = 0; i < yearTable.length; i++) {
  getThatLeapYear(yearTable[i]);
}
