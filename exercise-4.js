var hari, bulan, tahun;
var formatTanggal = "";
hari = 21;
bulan = 1;
tahun = 1945; // range tahun 1900 - 2200

if ((tahun >= 1900) && (tahun <= 2200)) {
    switch (bulan) {
        case 1:
            if ((hari >= 1) && (hari <= 31)) {
                formatTanggal = hari + " Januari " + tahun;
            } else {
                formatTanggal = "Invalid Format Input! Januari consist of 31 days.";
            }
            break;
        case 2:
            if ((hari >= 1) && (hari <= 29)) {
                if ((tahun % 100 !== 0) && (tahun % 4 === 0)) {
                    formatTanggal = hari + " Februari " + tahun;
                } else if (tahun % 400 === 0) {
                    formatTanggal = hari + " Februari " + tahun;
                } else if (hari !== 29) {
                    formatTanggal = hari + " Februari " + tahun;
                } else {
                    formatTanggal = "Invalid Format Input! " + tahun + " is not kabisat year, Februari only consists of 28 days.";
                }
            } else {
                formatTanggal = "Invalid Format Input! Februari consist of 28 or 29 (kabisat) days.";
            }
            break;
        case 3:
            if ((hari >= 1) && (hari <= 31)) {
                formatTanggal = hari + " Maret " + tahun;
            } else {
                formatTanggal = "Invalid Format Input! Maret consist of 31 days.";
            }
            break;
        case 4:
            if ((hari >= 1) && (hari <= 30)) {
                formatTanggal = hari + " April " + tahun;
            } else {
                formatTanggal = "Invalid Format Input! April consist of 30 days.";
            }
            break;
        case 5:
            if ((hari >= 1) && (hari <= 31)) {
                formatTanggal = hari + " Mei " + tahun;
            } else {
                formatTanggal = "Invalid Format Input! Mei consist of 31 days.";
            }
            break;
        case 6:
            if ((hari >= 1) && (hari <= 30)) {
                formatTanggal = hari + " Juni " + tahun;
            } else {
                formatTanggal = "Invalid Format Input! Juni consist of 30 days.";
            }
            break;
        case 7:
            if ((hari >= 1) && (hari <= 31)) {
                formatTanggal = hari + " Juli " + tahun;
            } else {
                formatTanggal = "Invalid Format Input! Juli consist of 31 days.";
            }
            break;
        case 8:
            if ((hari >= 1) && (hari <= 31)) {
                formatTanggal = hari + " Agustus " + tahun;
            } else {
                formatTanggal = "Invalid Format Input! Agustus consist of 31 days.";
            }
            break;
        case 9:
            if ((hari >= 1) && (hari <= 30)) {
                formatTanggal = hari + " September " + tahun;
            } else {
                formatTanggal = "Invalid Format Input! September consist of 30 days.";
            }
            break;
        case 10:
            if ((hari >= 1) && (hari <= 31)) {
                formatTanggal = hari + " Oktober " + tahun;
            } else {
                formatTanggal = "Invalid Format Input! Oktober consist of 31 days.";
            }
            break;
        case 11:
            if ((hari >= 1) && (hari <= 30)) {
                formatTanggal = hari + " November " + tahun;
            } else {
                formatTanggal = "Invalid Format Input! November consist of 30 days.";
            }
            break;
        case 12:
            if ((hari >= 1) && (hari <= 31)) {
                formatTanggal = hari + " Desember " + tahun;
            } else {
                formatTanggal = "Invalid Format Input! Desember consist of 31 days.";
            }
            break;
        default:
            formatTanggal = "Invalid Format Input! Bulan only consists of 12 months.";
            break;
    }

} else formatTanggal = "Invalid Format Input! Tahun is out of range!";

console.log(formatTanggal);