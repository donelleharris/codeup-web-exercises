// classroom walkthrough of loops exercises
function returnMultiplicationTable(input){
    let output = ""
    for (var i = 1; i<=10; i++){
        output += input + " x " + i + " = " + (input * i)
        if(i !== 10) output += "\n"
    }
    console.log(output);
    return output;
}
function returnEvenOddMessage(input){
    if (input % 2 !== 0) {return "odd";}
    else {return "even"}
}
function returnTenEvenOddMessages(){
    let output = '';
    for(let i = 1; i < 11; i++){
        let random = Math.floor((Math.random() * 180) + 20);
        if(random % 2 === 0){
            output += `${random} is even`
        } else if (random % 2 !== 0){
            output += `${random} is odd`
        }
        if(i !== 10) output += '\n';
    }
    return output;
}
function returnNumberSail(){
    let output = ""
    for(let i = 1; i < 10; i++){
        let j = i.toString();
        output += j.repeat(i);
        if(i !== 9) output += '\n'
    }
    return output;
}
function returnCountDownFrom100InFives(){

}