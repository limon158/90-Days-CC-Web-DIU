// Search any by string  if
function getSearchResult(userInput, memorized)
{
    if(userInput.toLowerCase() === memorized.toLowerCase())
    {
        console.log('Found');
    }
    else
    {
        console.log('Not Found');
    }
}
let iWant = 'blackPinK';
let thereHave = 'BlackPink';
getSearchResult(iWant, thereHave);