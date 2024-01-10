let table = document.querySelector(".table");
// menambah data
let tambah_data = document.querySelector(".tambah_data");
// untuk menambah data
tambah_data.addEventListener("click", () => {
    let tambah = table.insertRow(-1);
    let namaMatkul= tambah.insertCell(0)
    let cell1 = tambah.insertCell(1);
    let cell2 = tambah.insertCell(2);
    namaMatkul.innerHTML=`<input type="text" placeholder="nama mata kuliah">`
    cell1.innerHTML = `<input type="number" placeholder="Masukkan jumlah SKS" style="text-align: center; color: black"; flex-grow: 1;width: 100%;/>`;
    cell2.innerHTML = `<select name="nilai" id="nilai" >
    <option value="A">A</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B">B</option>
    <option value="B-">B-</option>
    <option value="C+">C+</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
  </select>`;
});
// untuk menghapus
let hapus = document.querySelector(".hapus")
hapus.addEventListener("click", () => {
    let hapus = table.deleteRow(-1)
});

// menghitung ips 
// jumlah bobot nilai * sks /jumlah sks

let hitung = document.querySelector(".hitung");
hitung.addEventListener("click", () => {
  let totalSKS = 0;
  let totalPoint = 0;

  for (let i = 1; i < table.rows.length; i++) {
    let sks = parseFloat(table.rows[i].cells[1].children[0].value);
    let grade = table.rows[i].cells[2].children[0].value;

    if (isNaN(sks) || sks <= 0) {
      alert("Jumlah SKS harus berupa angka dan lebih besar dari 0");
      return;
    }

    switch (grade) {
      case "A":
        totalPoint += 4 * sks;
        break;
      case "A-":
        totalPoint += 3.7 * sks;
        break;
      case "B+":
        totalPoint += 3.3 * sks;
        break;
      case "B":
        totalPoint += 3 * sks;
        break;
      case "B-":
        totalPoint += 2.7 * sks;
        break;
      case "C+":
        totalPoint += 2.3 * sks;
        break;
      case "C":
        totalPoint += 2 * sks;
        break;
      case "D":
        totalPoint += 1 * sks;
        break;
      case "E":
        totalPoint += 0 * sks;
        break;
      default:
        alert("Nilai yang dimasukkan tidak valid");
        return;
    }
    totalSKS += sks;
  }

  let IPS = totalPoint / totalSKS;
  let SKS= totalSKS
  if (!isNaN(IPS)) {
    let hasil= table.insertRow(-1);
    let cell1= hasil.insertCell(0);
    cell1.innerHTML="Total SKS anda adalah " + SKS;
    let cell2 = hasil.insertCell(1);
    cell2.innerHTML="IPS Anda adalah " + IPS;
  } else {
    alert("Tidak ada data yang valid untuk dihitung");
  }
});