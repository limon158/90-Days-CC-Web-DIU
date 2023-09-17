function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    return sum;
}
function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var total = add(3, 2);
console.log(total);
var singaras = bringSingara(50);
console.log(singaras);