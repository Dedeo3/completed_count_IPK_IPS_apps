let table = document.querySelector(".table");
  let tambah_data = document.querySelector(".tambah_data");
  let hapus = document.querySelector(".hapus");
  let hitung = document.querySelector(".hitung");

  // Menambah data ke tabel
  tambah_data.addEventListener("click", () => {
    let tambah = table.insertRow(-1);
    let cell1 = tambah.insertCell(0);
    let cell2 = tambah.insertCell(1);
    // cell2.classList.add(".data2 input")
    cell1.innerHTML = `<input type="number" placeholder="Masukkan jumlah SKS" style="text-align: center; color: black; flex-grow: 1; width: 100%;"/>`;
    cell2.innerHTML = `<input type="text" placeholder="Masukkan nilai anda" style="text-align: center; color: black; flex-grow: 1; width: 100%;"/>`;
  });

  // Menghapus data dari tabel
  hapus.addEventListener("click", () => {
    let rowCount = table.rows.length;
    if (rowCount > 1) {
      table.deleteRow(rowCount - 1);
    }
  });

  // Menghitung total semester
  hitung.addEventListener('click', () => {
    let totalSem = table.rows.length - 1;
    console.log('Total Semester:', totalSem);
    // Lakukan perhitungan lain yang diperlukan untuk menghitung IPK
    let ips = document.querySelector(".data2 input");
    let ipsValue = parseFloat(ips.value);
    console.log('nilai ips pertama',ipsValue)
    let totalIps = 0;
    for (let i = 1; i <= totalSem; i++) {
      let ips = parseFloat(table.rows[i].cells[1].querySelector("input").value);
      if (!isNaN(ips)) {
        totalIps += ips;
      }
    }
    console.log('Total IPS:', totalIps);

    let hitungIpk= totalIps/totalSem
    let hasil= table.insertRow(-1);
    let cell1= hasil.insertCell(0);
    cell1.innerHTML="Total Semester anda adalah " + totalSem;
    let cell2 = hasil.insertCell(1);
    cell2.innerHTML="IPK anda adalah " + hitungIpk;
    
  });
  