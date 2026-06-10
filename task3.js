/*Your task is to calculate the total budget required to buy electronics:
    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/

const pricePerlaptop = 35000;
const pricePertablet = 15000;
const pricePermobile = 20000;

function calculateElectronicsBudget(quantityOFlaptop, quantityOftablet, quantityOfmobile) {
    const totallaptopPrice = pricePerlaptop * quantityOFlaptop;
    const totaltabletPrice = pricePertablet * quantityOftablet;
    const totalmobilePrice = pricePermobile * quantityOfmobile;

    const totalBudget = totallaptopPrice + totaltabletPrice + totalmobilePrice;

    return totalBudget
}
const Budget = calculateElectronicsBudget(2,1,1)
console.log(Budget);