// search any keyword from a string set
const lyrics = 'I am so lonly broken angel come on save me before.pdf';
const lyricsLowerCase = lyrics.toLowerCase();
const searchKey = 'Angel';
const searchKeyLowerCase = searchKey.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchKeyLowerCase);
// console.log(doesExist);
if(lyricsLowerCase.includes(searchKeyLowerCase))
{
    console.log("found");
}
console.log(lyrics.indexOf(searchKeyLowerCase));
if(lyrics.endsWith('.pdf'))
{
    console.log('yes');
}