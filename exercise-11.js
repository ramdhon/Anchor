// -----------------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// -----------------------------------------------------------------

function balikKata(kata) {
    var index = kata.length;
    while (index > 0) {
        kata = kata + kata.charAt(index-1);
        index--;
    }
    kata = kata.substr(Math.floor(kata.length / 2));
    return kata;
}

console.log(balikKata("Hello World and Coders"));   // sredoC dna dlroW olleH
console.log(balikKata("John Doe"));                 // eoD nhoJ
console.log(balikKata("I am a bookworm"));          // mrowkoob a ma I
console.log(balikKata("Coding is my hobby"));       // ybboh ym si gnidoC
console.log(balikKata("Super"));                    // repuS