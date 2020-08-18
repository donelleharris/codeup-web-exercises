
// queryUser function
function queryUser() {
    let num
    while (true) {
        num = prompt("Please enter an odd number between 1 and 50.")
        if (isValidOddNumber(num) && num >= 1 && num <= 50) break;
        alert('Invalid entry:\n' +
            num + ' is not an odd number between 1 amd 50')
    }
    console.log(getOddNumbers(num))
}
function isValidOddNumber(num) {
    if (isNaN(num)) return false
    num = Number(num)
    if (!Number.isInteger(num)) return false
    return (num % 2 === 1)
}
function getOddNumbers(skip) {
    // validate data
    if (!isValidOddNumber(skip))
        return "Error: The skip value is not an odd number between 1 amd 50"
    // process data
    let output = 'Number to skip is: ' + skip + '\n\n'
    skip = Number(skip)
    for (let i = 1; i <= 50; i += 2) {
        if (i === skip) {
            output += 'Yikes! Skipping number: ' + skip + '\n'
            continue
        }
        output += i
        if (i < 49) output += '\n'
    }
    return output
}