// 1. 0 to 100 price 100 tk;
// 2. 100 to 200 price 90tk;
// 2. rest price 70tk;
// calculate total price of given number of ticket using function.
function getTotalPrice(numberOfTicket)
{
    const firstHundredPrice = 100;
    const secondHundredPrice = 90;
    const restPrice = 70;
    if(numberOfTicket <= 100)
    {
        const totalPrice = numberOfTicket * firstHundredPrice;
        return totalPrice;
    }
    else if(numberOfTicket > 100 && numberOfTicket <= 200)
    {
        const firstHundred = 100 * firstHundredPrice;
        const restNumber = (numberOfTicket - 100) * secondHundredPrice;
        const totalPrice = firstHundred + restNumber;
        return totalPrice;
    }
    else
    {
        const firstHundred = 100 * firstHundredPrice;
        const secondHundred = 100 * secondHundredPrice;
        const restNumber = (numberOfTicket - 200) * restPrice;
        const totalPrice = firstHundred + secondHundred + restNumber;
        return totalPrice;
    }
}
const totalTickets = 201;
const totalTicketPrice = getTotalPrice(totalTickets);
console.log(totalTicketPrice);