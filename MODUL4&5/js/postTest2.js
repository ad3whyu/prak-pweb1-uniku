function barang() {
  kode = document.form1.kode.value;
  if (kode == "B001") {
    harga = 5000;
    barang = "Buku";
  } else if (kode == "B002") {
    harga = 1500;
    barang = "Penggaris";
  } else if (kode == "B003") {
    harga = 2000;
    barang = "Pulpen";
  }
  document.form1.nmBarang.value = barang;
  document.form1.hargaBarang.value = harga;
}
function tampilkan() {
  let jbeli = parseInt(document.getElementById("jbeli").value);
  let hargaBarang = parseInt(document.form1.hargaBarang.value);
  let jumlahBayar = hargaBarang * jbeli;
  let persen = 0;

  // Diskon berdasarkan jumlah beli
  if (jbeli <= 10) {
    persen = 5; // 5%
  } else if (jbeli > 10 && jbeli <= 20) {
    persen = 10; // 10%
  } else if (jbeli > 20) {
    persen = 15; // 15%
  }

  potongan = (persen / 100) * jumlahBayar;
  totBayar = jumlahBayar - potongan;

  // Update nilai pada form
  document.form1.persen.value = persen;
  document.form1.jmlPotongan.value = potongan;
  document.form1.jmlBayar.value = jumlahBayar;
  document.form1.tBayar.value = totBayar;
}
function nota() {
  let nota = `
    <h3><b>NOTA PENJUALAN</b></h3>
<pre>
Kode Barang   = ${document.form1.kode.value}
Nama Barang   = ${document.form1.nmBarang.value}
Harga Barang  = Rp ${document.form1.hargaBarang.value}
Jumlah Beli   = ${document.form1.jbeli.value}
----------------------------------
Jumlah Bayar  = Rp ${document.form1.jmlBayar.value}
Potongan      = Rp ${document.form1.jmlPotongan.value}
==================================
Total Bayar   = Rp ${document.form1.tBayar.value}
</pre>

  `;
  document.getElementById("nota").innerHTML = nota;
}
