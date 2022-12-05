const fs = require('fs');

function getScore() {
    let partOneScore = 0, partTwoScore = 0, result
    const input = fs.readFileSync('input.txt', 'utf8')
    input.split(/\n/).map((item) => {
        item = item.replace(/,/g, '-')
        let str = '', arrayStr = []
        for (const key in item) {
            const element = item[key];
            if (element == '-') {
                arrayStr.push(str)
                str = ''
            } else {
                str = str.concat(element)
            }
        }
        arrayStr.push(str)
        result = doMath(+arrayStr[0], +arrayStr[1], +arrayStr[2], +arrayStr[3])
        partOneScore += result.partOne
        partTwoScore += result.partTwo
    });
    console.log(`PartOneScore: ${partOneScore}, PartTwoScore: ${partTwoScore}`)
}

function doMath(i0, i1, i2, i3) {
    /* -------------- PART 1 ------------ */
    let partOne = 0, partTwo = 0
    if ((i0 <= i2 && i1 >= i3) || (i2 <= i0 && i3 >= i1)) partOne = 1
    /* -------------- PART 2 ------------ */
    if (i1 >= i2 && i0 <= i3) partTwo = 1

    return { partOne, partTwo }
}


getScore()