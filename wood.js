function woodQuntity(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 30;

    const totalChairWood = chairQuantity * perChairWood;
    const totalTableWood = tableQuantity * perTableWood;
    const totalBedWood = bedQuantity * perBedWood;

    const totalWood = totalBedWood + totalChairWood + totalTableWood
    return totalWood;
}
const wood=woodQuntity(0,0,1);
console.log(wood)

