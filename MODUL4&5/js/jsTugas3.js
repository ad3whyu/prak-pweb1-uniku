function lihatHarga() {
  typeKamar = document.form2.tipeKamar.value;

  if (typeKamar == "Deluxe") {
    harga = 3500000;
  } else if (typeKamar == "Standar") {
    harga = 2000000;
  } else if (typeKamar == "Family") {
    harga = 3000000;
  }

  document.form2.harga.value = harga;
}

// Validasi apakah input hanya berisi angka dan memiliki panjang 16
function validasiIdentitas() {
    const input = document.getElementById("identitas").value;

    // Validasi apakah input hanya berisi angka dan memiliki panjang 16
    if (!/^\d{16}$/.test(input)) {
      alert("Isian Nomor Identitas salah, harus 16 digit");
      return false; // Stop function jika invalid
    }
    return true; // Valid input
  }
 
function validasiDurasi() {
  const input = document.getElementById("durasi").value;

  // Validasi apakah input hanya berupa angka
  if (!/^\d+$/.test(input)) {
    alert("Durasi menginap harus diisi dengan angka");
    return false; // Stop function jika invalid
  }
  return true; // Valid input
}

function hitungHarga() {
  validasiIdentitas();
  validasiDurasi();
  const hargaAwal = parseInt(document.form2.harga.value);
  const durasi = parseInt(document.getElementById("durasi").value);
  const breakFast = document.getElementById("BreakfastYa").checked;
  let totalHarga = hargaAwal;

  if (durasi > 3) {
    totalHarga -= totalHarga * 0.1;
  }

  if (breakFast) {
    totalHarga += 80000;
  }

  document.form2.totalHarga.value = totalHarga;
  resume();
}

function resume() {
  let resume = `
      <h3><center><b>RESUME PEMESANAN</center></b></h3>
  <pre>
    Nama Pemesan       = ${document.form2.nama.value}
    Jenis Kelamin      = ${document.form2.jkL.checked ? 'Laki-laki' : 'Perempuan'}
    Nomor Identitas    = ${document.form2.identitas.value}
    Tipe Kamar         = ${document.form2.tipeKamar.value}
    Harga              = Rp ${document.form2.harga.value}
    Tanggal Pesan      = ${document.form2.tgl_pesan.value}
    Lama Menginap      = ${document.form2.durasi.value} hari
    Termasuk Breakfast = ${document.form2.BreakfastYa.checked ? 'Ya' : 'Tidak'}
    ==================================
    Total Harga        = Rp ${document.form2.totalHarga.value}
    </pre>
    `;
  document.getElementById("resume").innerHTML = resume;
}
