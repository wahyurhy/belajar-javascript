# Penjelasan Operator `typeof` di JavaScript

Kode berikut menggunakan operator `typeof` untuk mengetahui tipe data dari sebuah variabel.

```html
<script>
    let data = 100;
    const typeData = typeof data;
    document.writeln(`<p>${typeData}</p>`);
</script>
```

## Penjelasan

### Baris per Baris

1. `let data = 100;`  
   - Mendeklarasikan variabel `data` dengan nilai berupa angka.

2. `const typeData = typeof data;`  
   - Operator `typeof` digunakan untuk mengecek tipe data dari variabel `data`.
   - Hasil dari `typeof data` dalam kasus ini adalah `"number"`.

3. `document.writeln(\`<p>\${typeData}</p>\`);`  
   - Menampilkan hasilnya di halaman web: `<p>number</p>`

## Tipe Data yang Dikembalikan oleh `typeof`

| Nilai                     | Hasil `typeof`   |
|--------------------------|------------------|
| `"Wahyu"`                | `"string"`       |
| `123`                    | `"number"`       |
| `true` / `false`         | `"boolean"`      |
| `{}` (objek)             | `"object"`       |
| `[]` (array)             | `"object"`       |
| `null`                   | `"object"` (khusus/bug lama) |
| `undefined`              | `"undefined"`    |
| `function() {}`          | `"function"`     |

## Catatan

- `typeof null` menghasilkan `"object"` karena warisan dari masa awal JavaScript. Ini dianggap sebagai bug, tapi tetap dipertahankan untuk kompatibilitas.
- Untuk mengecek array secara spesifik, gunakan:
  ```javascript
  Array.isArray(data);
  ```

## Kesimpulan

Operator `typeof` sangat berguna untuk debugging dan validasi tipe data secara dinamis. Ini membantu dalam pengambilan keputusan logika berdasarkan jenis data.
