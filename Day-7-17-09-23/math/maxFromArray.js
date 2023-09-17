// find tallest from the given heights
function  getTallest(heights)
{
    let largest = heights[0];
    for(let i = 0; i < heights.length; i++)
    {
        const element = heights[i];
        if(element > largest)
        {
            largest = element;
        }
    }
    return largest;
}
const heightSet = [45, 54, 76, 93, 35, 98];
const largestNum = getTallest(heightSet);
console.log(largestNum);
