function powersOfTwo(){
    let num = 2;
    while (num <= 65536){
        console.log(num)
        num *= 2;
    }
}

function sellCones(){
    var allCones = Math.floor(Math.random() * 50) + 50;
    do {
        var numConesWanted = Math.floor(Math.random() * 5) +1;
        if(numConesWanted <= allCones){
            console.log(numConesWanted + " cones sole...");
            allCones -= numConesWanted
        } else {
            console.log("Cannot sell you " + numConesWanted + " cones. I only have " + allCones + ".");
        }
    } while (allCones > 0){
        console.log("Yay! I sold them all!");
    }
}