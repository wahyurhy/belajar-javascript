# Penjelasan Tipe Data Array di JavaScript

Kode berikut menjelaskan bagaimana cara membuat, mengakses, memodifikasi, dan menghapus elemen dalam array menggunakan JavaScript.

```html
<script>
    let arrayKosong = [];

    let arrayNama = ["Wahyu" + "Rahayu"];

    const names = [];
    names.push("Wahyu");
    names.push("Rahayu", "Tampan");
    names.push("Budi", "Joko", "Rudi");

    console.table(names);

    console.info(names[0]);
    console.info(names[1]);
    console.info(names[2]);
    console.info(names[3]);

    names[0] = "Programmer";
    names[1] = "Jago";
    names[2] = "dan Handal";
    console.table(names);

    delete names[3];
    console.table(names);

    names.push("Wahyu lagi");
    console.table(names);

    names[3] = "Dirubah lagi";
    console.table(names);
    
    names.push(1, 2, 3, 4, 5);
    names.push(["Wahyu", "Tetap", "Berjuang"]);
    console.table(names);
</script>
```

## Penjelasan

### 1. Membuat Array

```javascript
let arrayKosong = [];
let arrayNama = ["Wahyu" + "Rahayu"];  // Hasil: ["WahyuRahayu"]
```

### 2. Menambahkan Elemen dengan `push`

```javascript
names.push("Wahyu");
names.push("Rahayu", "Tampan");
names.push("Budi", "Joko", "Rudi");
```

- `push()` menambahkan elemen ke akhir array.

### 3. Akses Elemen Array

```javascript
console.info(names[0]);  // Mengakses elemen pertama
```

### 4. Mengubah Nilai Elemen

```javascript
names[0] = "Programmer";
names[1] = "Jago";
names[2] = "dan Handal";
```

### 5. Menghapus Elemen dengan `delete`

```javascript
delete names[3];
```

- Menghapus isi index ke-3, tapi **tidak menggeser elemen lain**. Index ke-3 tetap ada tapi `undefined`.

### 6. Menambahkan Lagi

```javascript
names.push("Wahyu lagi");
names[3] = "Dirubah lagi";  // Mengisi kembali elemen ke-3
```

### 7. Menambahkan Nilai Campuran

```javascript
names.push(1, 2, 3, 4, 5);
names.push(["Wahyu", "Tetap", "Berjuang"]);
```

- Array dapat menampung berbagai tipe data, termasuk array lain (nested array).

### 8. `console.table(names)`

- Menampilkan isi array dalam bentuk tabel di console browser, memudahkan visualisasi isi array.

## Kesimpulan

- Array di JavaScript bersifat dinamis dan dapat berisi berbagai tipe data.
- Gunakan `push` untuk menambahkan elemen, dan index untuk akses atau ubah nilai.
- Gunakan `console.table()` untuk menampilkan isi array dengan rapi di console.
- Hindari `delete` jika ingin menghapus dan merapikan array, gunakan `splice()` untuk hasil yang lebih bersih.
