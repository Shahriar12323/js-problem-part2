// You are given an array of phone objects, each containing information about the model, brand, and price.Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 10 },
    { model: "PhoneB", brand: "Samsung", price: 40 },
    { model: "PhoneC", brand: "Oppo", price: 26 },
    { model: "PhoneD", brand: "Nokia", price: 35 },
    { model: "PhoneE", brand: "Iphone", price: 10 },
    { model: "PhoneF", brand: "HTC", price: 48 },
];

console.log(typeof phones)
function findAveragePhonePrice(phones) {
    if (phones.length === 0) {
        return 0;
    }
    let totalPrice = 0;

    for (const phone of phones) {
        totalPrice = phone.price + totalPrice;
        console.log(totalPrice);
    }
    const average = totalPrice / phones.length;
    return average;
}
const average = findAveragePhonePrice(phones);
console.log(average);

