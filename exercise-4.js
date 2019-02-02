var hari, bulan, tahun;
var formatTanggal = "";
hari = 21;    // range hari 1 - 31
bulan = 1;    // range bulan 1 - 12
tahun = 1945; // range tahun 1900 - 2200

if (tahun >= 1900 && tahun <= 2200) {
    if (hari >= 1 && hari <= 31) {
        switch (bulan) {
            case 1:
                formatTanggal = "Januari";
                break;
            case 2:
                formatTanggal = "Februari";
                break;
            case 3:
                formatTanggal = "Maret";
                break;
            case 4:
                formatTanggal = "April";
                break;
            case 5:
                formatTanggal = "Mei";
                break;
            case 6:
                formatTanggal = "Juni";
                break;
            case 7:
                formatTanggal = "Juli";
                break;
            case 8:
                formatTanggal = "Agustus";
                break;
            case 9:
                formatTanggal = "September";
                break;
            case 10:
                formatTanggal = "Oktober";
                break;
            case 11:
                formatTanggal = "November";
                break;
            case 12:
                formatTanggal = "Desember";
                break;
            default:
                formatTanggal = "Invalid Format Input! Bulan only consists of 12 months. (1 - 12)";
                break;
        }
        if (bulan === 2) {
            if (hari <= 29) {
                if ((tahun % 100 !== 0 && tahun % 4 === 0) || (tahun % 400 === 0) || (hari !== 29)) {
                    formatTanggal = hari + " " + formatTanggal + " " + tahun;
                } else {
                    formatTanggal = "Invalid Format Input! " + tahun + " is not kabisat year, " + formatTanggal + " only consists of 28 days.";
                }
            } else {
                formatTanggal = "Invalid Format Input! " + formatTanggal + " consist of 28 or 29 (kabisat) days.";
            }
        } else if (!(bulan === 4 || bulan === 6 || bulan === 9 || bulan === 11) || hari <= 30) {
            formatTanggal = hari + " " + formatTanggal + " " + tahun;
        } else {
            formatTanggal = "Invalid Format Input! " + formatTanggal + " consist of 30 days.";
        }  
    } else {
        formatTanggal = "Invalid Format Input! Hari is out of range! (1 - 31)"
    }
} else {
    formatTanggal = "Invalid Format Input! Tahun is out of range! (1900 - 2200)";
}

console.log(formatTanggal);