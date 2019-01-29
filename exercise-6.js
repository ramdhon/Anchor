// 1. Melakukan Looping Menggunakan While

var count = 1;

console.log("LOOPING PERTAMA");
while (count <= 20) {
    console.log(count + " - I love coding");
    count = count + 2;
}

console.log("LOOPING KEDUA");
count = 20;
while (count >= 2) {
    console.log(count + " - I love coding");
    count = count - 2;
}

//-------------------------------------------------------------------


// 2. Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA");
for (var count2 = 1; count2 <= 20; count2++) {
    console.log(count2 + " - I love coding");
}

console.log("LOOPING KEDUA");
for (var count2 = 20; count2 >=1; count2--) {
    console.log(count2 + " - I will become fullstack developer");
}

//-------------------------------------------------------------------


// 3. Angka Ganjil dan Genap

// ganjil genap
for (var counter = 1; counter <= 100 ; counter++) {
    if (counter % 2 === 0) {
        console.log("GENAP");
    } else {
        console.log("GANJIL");
    }
}

// kelipatan = 3; stepCounter = 2
counter = 1;
while (counter <= 100) {
    if (counter % 3 === 0) {
        console.log(counter + " KELIPATAN 3");
    } else {
        console.log("");
    }
    counter += 2;
}

// kelipatan = 6; stepCounter = 5
counter = 1;
while (counter <= 100) {
    if (counter % 6 === 0) {
        console.log(counter + " KELIPATAN 6");
    } else {
        console.log("");
    }
    counter += 5;
}

// kelipatan = 10; stepCounter = 9
counter = 1;
while (counter <= 100) {
    if (counter % 10 === 0) {
        console.log(counter + " KELIPATAN 10");
    } else {
        console.log("");
    }
    counter += 9;
}
//-------------------------------------------------------------------