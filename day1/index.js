
const fs = require('fs');
const readline = require('readline');

async function elfChallenge() {
    /* ---- Find  bigest value ----  */

    const fileStream = fs.createReadStream('input.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let caloriesList = []
    let caloriesByElf = 0
    let lastEmitedValue = 0
    for await (const calories of rl) {
        if (calories) {
            caloriesByElf += +calories
            lastEmitedValue = +caloriesByElf
        } else {
            caloriesList.push(+caloriesByElf)
            caloriesByElf = 0
            lastEmitedValue = 0
        }
    }
    caloriesList.push(lastEmitedValue)
    const largestCallories = Math.max(...caloriesList)
    console.log(`Top eil is carrying ${largestCallories} calorries`)

    caloriesList.sort(function (a, b) { return a - b })
    const totalCarriedByTopThree = caloriesList[caloriesList.length - 1] + caloriesList[caloriesList.length - 2] + caloriesList[caloriesList.length - 3]
    console.log(`Top 3 eils are carrying ${totalCarriedByTopThree} calorries`)
}

elfChallenge()

