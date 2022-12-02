
const fs = require('fs');

async function getValue() {
    let myScore = 0
    let teammateScore = 0
    const input = fs.readFileSync('input.txt', 'utf8')
    input.split(/\n/).map(([opponent, , us]) => {
        const result = getWinnerValue(opponent, us)
        myScore += result.totalScore
        teammateScore += result.teammateScore
    })
    console.log(`myScore: ${myScore} -- teammateScore: ${teammateScore}`)
}

function getWinnerValue(value1, value2) {
    /* ---------- Test 1 --------- */
    const shapeScore = { X: 1, Y: 2, Z: 3 }
    const output = { AX: 3, AY: 6, AZ: 0, BX: 0, BY: 3, BZ: 6, CX: 6, CZ: 3, CY: 0 }
    const totalScore = output[`${value1}${value2}`] + shapeScore[value2]
    /* ---------- Test 2 --------- */
    if (value2 == 'X') {
        value1 == 'A' ? (value2 = 'Z') : value1 == 'B' ? (value2 = 'X') : value1 == 'C' ? (value2 = 'Y') : (value2 = 'Y');
    } else if (value2 == 'Y') {
        value1 == 'A' ? (value2 = 'X') : value1 == 'B' ? (value2 = 'Y') : value1 == 'C' ? (value2 = 'Z') : (value2 = 'Z');
    } else if (value2 == 'Z') {
        value1 == 'A' ? (value2 = 'Y') : value1 == 'B' ? (value2 = 'Z') : value1 == 'C' ? (value2 = 'X') : (value2 = 'X');
    }
    const teammateScore = output[`${value1}${value2}`] + shapeScore[value2]
    return { totalScore, teammateScore }
}

getValue()

