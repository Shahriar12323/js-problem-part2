// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const Names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function findSmallestName(names) {
    let smallest = names[0];
    console.log(names[0])

    for (const name of names) {
        const nameLength = name.length;

        if (nameLength < smallest.length) {
            smallest = name;
        }
    }
    return smallest;
}

const result = findSmallestName(Names);
console.log(result);