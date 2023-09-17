// reverse string
function getReverse(string)
{
    for(let i = string.length-1; i >= 0; i--)
    {
        const element = string[i];
        console.log(element);
    }
}
function getReverseWord(words)
{
    let reversed = [];
    for(let i = words.length-1; i>=0; i--)
    {
        const element = words[i];
        reversed.push(element);
    }
    console.log(reversed);
    let reversedSentence = reversed.join(' ');
    console.log(reversedSentence);
}
const myString = 'i am good programmer';
const myWords = myString.split(' ');
getReverse(myString);
getReverseWord(myWords);
