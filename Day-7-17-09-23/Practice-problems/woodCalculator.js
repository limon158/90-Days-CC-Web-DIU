// calculate how many wood need for table, chair and bed
function woodCalculator(totalTable, totalChair, totalBed)
{
    const tableWood = 3;
    const chairWood = 5;
    const bedWood = 9;
    const totalTableWood = totalTable*tableWood;
    const totalChairWood = totalChair*chairWood;
    const totalBedWood = totalBed*bedWood;
    const totalWood = totalTableWood+totalChairWood+totalBedWood;
    return totalWood;
}
const table = 3;
const chair = 5;
const bed = 8;
const totalWoodNeed = woodCalculator(table, chair, bed);
console.log(totalWoodNeed);