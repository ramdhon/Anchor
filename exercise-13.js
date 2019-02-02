// -----------------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// -----------------------------------------------------------------

function xo(str) {
    var countX = 0;
    var countO = 0;
    str = str.toLowerCase();
    for (var index = 0; index < str.length; index++) {
        if (str[index] === "x") {
            countX++;
        } else if (str[index] === "o") {
            countO++;
        }
    }
    if (countX === countO) {
        return true;
    } else {
        return false;
    }
}

console.log(xo('xoxoXo'));      // true
console.log(xo('oxooxo'));      // false
console.log(xo('oxo'));         // false
console.log(xo('xxxooo'));      // true
console.log(xo('xoxooxxo'));    // true