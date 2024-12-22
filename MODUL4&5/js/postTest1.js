function tampil(){
    golongan = document.form1.gol.value;
    if (golongan == "I") {
        gapok = 250000;
      } else if (golongan == "II") {
        gapok = 300000;
      } else {
        gapok = 350000;
      }
      document.form1.gapok.value = gapok;
}

function hit() {
  golongan = document.form1.gol.value;
  jumlahAnak = document.getElementById("anak").value;
  if (golongan == "I") {
    gapok = 250000;
    tunj = (jumlahAnak * gapok) * 0.05;
    gaber = gapok + tunj;
  } else if (golongan == "II") {
    gapok = 300000;
    tunj = (jumlahAnak * gapok) * 0.1;
    gaber = gapok + tunj;
  } else {
    gapok = 350000;
    tunj = (jumlahAnak * gapok) * 0.15;
    gaber = gapok + tunj;
  }
  document.form1.anak.value = jumlahAnak;
  document.form1.tunjangan.value = tunj;
  document.form1.gaji.value = gaber;
}

