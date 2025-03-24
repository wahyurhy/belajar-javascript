# Penjelasan Popup Konfirmasi dan Prompt di JavaScript

Kode berikut menunjukkan bagaimana menggunakan popup **confirm**, **prompt**, dan **alert** di JavaScript untuk interaksi sederhana dengan pengguna.

```html
<script>
    const masuk = confirm("Anda yakin ingin masuk?");

    if(masuk) {
        const name = prompt("Siapa nama Anda?");
        alert(`Hello ${name}`);
    } else {
        alert('Bye bye');
    }
</script>
```

## Penjelasan

### 1. `confirm("Anda yakin ingin masuk?");`

- Menampilkan popup konfirmasi dengan tombol **OK** dan **Cancel**.
- Jika pengguna menekan **OK**, maka `masuk` bernilai `true`.
- Jika pengguna menekan **Cancel**, maka `masuk` bernilai `false`.

### 2. `if (masuk) { ... }`

- Jika pengguna menekan OK:
  - Akan muncul popup **prompt** untuk meminta input nama.
  - Nilai input disimpan ke dalam variabel `name`.
  - Kemudian ditampilkan pesan sapaan melalui `alert`.

- Jika pengguna menekan Cancel:
  - Menampilkan pesan `Bye bye` lewat `alert`.

### 3. `prompt("Siapa nama Anda?");`

- Menampilkan popup yang memungkinkan pengguna mengetik teks.
- Nilainya dikembalikan dalam bentuk string.

### 4. `alert(...)`

- Menampilkan pesan popup sederhana berisi teks.

## Ilustrasi Alur

1. Muncul popup: **"Anda yakin ingin masuk?"**
2. Jika "OK" → lanjut ke prompt: **"Siapa nama Anda?"**
   - Lalu muncul popup: **"Hello [nama]"**
3. Jika "Cancel" → langsung muncul popup: **"Bye bye"**

## Kesimpulan

- `confirm()` cocok untuk meminta konfirmasi pengguna (true/false).
- `prompt()` digunakan untuk menerima input langsung dari pengguna.
- `alert()` digunakan untuk menampilkan pesan sederhana.
- Kombinasi ini berguna untuk membuat interaksi dasar di aplikasi web tanpa memerlukan form HTML.
