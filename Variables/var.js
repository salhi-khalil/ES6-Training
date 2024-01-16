/**
 * variables
 */
function testVar() {
    var x = 10;

    if (true) {
        var x = 12;
        console.log("in block : " + x);
    }
    console.log(x);
    var x = 5;
    console.log(x)
}

testVar();