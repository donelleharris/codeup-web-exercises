var returnMultiplicationTable = function (num){
var i = 1;
let output = "";
while (i <= 10){
    output+= (num + " x " + i + " = " + num*i);
    i++
    if (i !== 11) output += '\n';
    }
    return output;
}
var returnEvenOddMessage = function (i){
    if (i % 2 !== 0) {
        return "odd"
    } else {return "even"}
}
console.log(returnEvenOddMessage(5));

function returnTenEvenOddMessages() {
    let evenOdd = ""
    for (let i = 1; i < 11; i++) {
        let random = Math.floor((Math.random() * 180) + 20);
        if (random % 2 === 0) {
            evenOdd += `${random} is even`
        } else if (random % 2 === 1) {
            evenOdd += `${random} is odd`
        }
        if (i !== 10) evenOdd += '\n'
    }
    return evenOdd;
}
    console.log(returnTenEvenOddMessages());