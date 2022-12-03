const fs = require('fs');
const carracterValues = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14,
    o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
}

async function getScore() {
    let partOneScore = 0, partTwoScore = 0, count = 0, smallChunck = []
    const input = fs.readFileSync('input.txt', 'utf8')
    input.split(/\n/).map(async (items) => {
        partOneScore += getTotal(items)
        smallChunck.push(items)
        count += 1
        if(count === 3) {
            partTwoScore += findBadge(smallChunck)
            count = 0
            smallChunck = []
        }
    })
    console.log(`PartOneScore: ${partOneScore}, partTwoScore: ${partTwoScore}`)
}

/*  ------------ Part 1 -----------  */
function getTotal(items) {
    const length = items.length, half = items.length / 2
    const firstHalf = items.substring(0, half), secondHalf = items.substring(half, length)
    for (let first in firstHalf) {
        let element = firstHalf[first]
        if (secondHalf.includes(element))  return getCarraterScore(element)
    }
}

/*  ------------ Part 2 -----------  */
function findBadge(itemsList) {
    const first = itemsList[0], second = itemsList[1], third = itemsList[2]
    for (let item in first) {
        let element = first[item]
        if (second.includes(element) && third.includes(element)) return getCarraterScore(element)
    }
}

function getCarraterScore(carracter) {
    if(carracter === duplicatedCarracter.toLowerCase()) {
        return carracterValues[duplicatedCarracter]
    } else {
        return carracterValues[duplicatedCarracter.toLowerCase()] + 26
    }
}

getScore()