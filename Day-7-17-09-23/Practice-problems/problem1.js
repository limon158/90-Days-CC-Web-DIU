var arr1 = ['Apple', 'Banana', 'Orange'];
var bananaIndex = arr1.indexOf('Banana');
arr1[bananaIndex] = 'Mango';
arr1.pop();
arr1.push('Watermelon');
console.log(bananaIndex);
console.log(arr1);
