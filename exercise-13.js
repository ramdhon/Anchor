// -----------------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// -----------------------------------------------------------------

function xo(str) {
    var count = 0;
    for (var index = 0; index < str.length; index++) {
        if (str.charAt(index) === "x") {
            count--;
        } else if (str.charAt(index) === "o") {
            count++;
        }
    }
    if (count === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(xo('xoxoxo'));      // true
console.log(xo('oxooxo'));      // false
console.log(xo('oxo'));         // false
console.log(xo('xxxooo'));      // true
console.log(xo('xoxooxxo'));    // true