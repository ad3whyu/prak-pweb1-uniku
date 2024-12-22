$(document).ready(function () {
    function lihatHarga() {
      const typeKamar = $("#tipeKamar").val();
      let harga;
  
      if (typeKamar === "Deluxe") {
        harga = 3500000;
      } else if (typeKamar === "Standar") {
        harga = 2000000;
      } else if (typeKamar === "Family") {
        harga = 3000000;
      }
  
      $("#harga").val(harga);
    }
  
    function validasiIdentitas() {
      const input = $("#identitas").val();
  
      if (!/^\d{16}$/.test(input)) {
        alert("Isian Nomor Identitas salah, harus 16 digit");
        return false;
      }
      return true;
    }
  
    function validasiDurasi() {
      const input = $("#durasi").val();
  
      if (!/^\d+$/.test(input)) {
        alert("Durasi menginap harus diisi dengan angka");
        return false;
      }
      return true;
    }
  
    function hitungHarga() {
      if (!validasiIdentitas() || !validasiDurasi()) {
        return;
      }
  
      const hargaAwal = parseInt($("#harga").val());
      const durasi = parseInt($("#durasi").val());
      const breakFast = $("#BreakfastYa").is(":checked");
      let totalHarga = hargaAwal;
  
      if (durasi > 3) {
        totalHarga -= totalHarga * 0.1;
      }
  
      if (breakFast) {
        totalHarga += 80000;
      }
  
      $("#totalHarga").val(totalHarga);
      resume();
    }
  
    function resume() {
      const resume = `
        <h3><center><b>RESUME PEMESANAN</b></center></h3>
        <pre>
      Nama Pemesan       = ${$("#nama").val()}
      Jenis Kelamin      = ${$("#jkL").is(":checked") ? "Laki-laki" : "Perempuan"}
      Nomor Identitas    = ${$("#identitas").val()}
      Tipe Kamar         = ${$("#tipeKamar").val()}
      Harga              = Rp ${$("#harga").val()}
      Tanggal Pesan      = ${$("#tgl_pesan").val()}
      Lama Menginap      = ${$("#durasi").val()} hari
      Termasuk Breakfast = ${$("#BreakfastYa").is(":checked") ? "Ya" : "Tidak"}
      ==================================
      Total Harga        = Rp ${$("#totalHarga").val()}
        </pre>
      `;
      $("#resume").html(resume);
    }
  
    // Event handlers
    $("#tipeKamar").change(lihatHarga);
    $("#hitungHarga").click(hitungHarga);
  });
  