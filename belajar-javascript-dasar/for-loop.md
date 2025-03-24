# Penjelasan Perulangan `for` di JavaScript

Kode berikut menggunakan perulangan `for` untuk mencetak teks sebanyak 10 kali ke dalam dokumen HTML.

```html
<script>
  for (let counter = 1; counter <= 10; counter++) {
    document.writeln(`<p>Perulangan ke ${counter}</p>`);
  }
</script>
```

## Penjelasan Baris demi Baris

1. `for (let counter = 1; counter <= 10; counter++)`  
   - Ini adalah struktur dasar perulangan `for` di JavaScript.
   - Terdiri dari tiga bagian:
     - **Inisialisasi**: `let counter = 1` → variabel `counter` dimulai dari 1.
     - **Kondisi**: `counter <= 10` → perulangan akan terus berjalan selama `counter` kurang dari atau sama dengan 10.
     - **Increment**: `counter++` → setiap kali selesai satu iterasi, nilai `counter` bertambah 1.

2. `document.writeln(\`<p>Perulangan ke \${counter}</p>\`);`  
   - Menuliskan elemen paragraf (`<p>`) ke dalam dokumen HTML.
   - Isi paragraf menampilkan teks: `Perulangan ke X`, di mana X adalah nilai dari `counter`.

## Output

Hasil dari kode tersebut adalah 10 baris teks:

```html
<p>Perulangan ke 1</p>
<p>Perulangan ke 2</p>
...
<p>Perulangan ke 10</p>
```

## Kesimpulan

Perulangan `for` sangat berguna untuk mengulangi aksi tertentu dalam jumlah yang sudah diketahui. Pada contoh di atas, aksi yang diulang adalah menampilkan teks sebanyak 10 kali dengan nilai counter yang berubah di setiap iterasi.
