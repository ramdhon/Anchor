// -----------------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// -----------------------------------------------------------------

function konversiMenit(menit) {
    var waktu = "";
    waktu = Math.floor(menit / 60);
    waktu = waktu + ":";
    if (menit % 60 > 9) {
        waktu = waktu + menit % 60;
    } else {
        waktu = waktu + "0" + menit % 60;
    }
    return waktu;
}

console.log(konversiMenit(63));     // 1:03
console.log(konversiMenit(124));    // 2:04
console.log(konversiMenit(53));     // 0:53
console.log(konversiMenit(88));     // 1:28
console.log(konversiMenit(120));    // 2:00