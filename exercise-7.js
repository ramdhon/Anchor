// 1. Menyusun Barisan Bintang

var rows1 = 5;
var count = 0;
while (count < rows1) {
    console.log("*");
    count++;
}

//------------------------------------------------------------------------


// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5;
var barisan = "";
for (var countY = 0; countY < rows2 ; countY++) {
    barisan = "";
    for (var countX = 0; countX < rows2 ; countX++) { 
        barisan = barisan + "*";
    }
    console.log(barisan);
}
//------------------------------------------------------------------------


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5;
countX = 0;
countY = 0;
while (countY < rows3) {
    barisan = "";
    countX = 0;
    while (countX < (countY+1)) {
        barisan = barisan + "*";
        countX++;
    }
    console.log(barisan);
    countY++;
}

//------------------------------------------------------------------------