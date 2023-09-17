// find duplicates and remove and make a filtered array
function filterDuplicate(names)
{
    const uniqNames = [];
    for(let i = 0; i < names.length; i++)
    {
        const name = names[i];
        if(uniqNames.includes(name) === false)
        {
            uniqNames.push(name);
        }
    }
    return uniqNames;
}
// call function
const studentsName = ['a', 'b', 'c', 'd', 'a', 'c', 'f', 'a', 'f', 'd'];
const filteredName = filterDuplicate(studentsName);
console.log(filteredName);