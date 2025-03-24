# Penjelasan Label pada Perulangan di JavaScript

Kode berikut menunjukkan penggunaan **label** pada perulangan bersarang di JavaScript untuk mengontrol alur `continue`.

```html
<script>
    loopi:
    for (let i = 0; i < 10; i++) {
        loopj:
        for (let j = 0; j < 100; j++) {
            if (j > 10) {
                continue loopi;
            }
            document.writeln(`<p>Perulangan ke-${i}, ${j}</p>`);
        }
    }
</script>
```

## Penjelasan

### Apa Itu Label?

- Label adalah nama yang diberikan pada blok perulangan.
- Format: `namaLabel: for (...) { ... }`
- Label memungkinkan penggunaan `break` atau `continue` untuk langsung mengarah ke loop tertentu, terutama dalam loop bersarang (nested loop).

### Struktur Kode

- `loopi:` adalah label untuk loop `for` luar (`i`).
- `loopj:` adalah label untuk loop `for` dalam (`j`).

### Logika Perulangan

1. Loop `i` berjalan dari `0` sampai `< 10`.
2. Di dalamnya, loop `j` berjalan dari `0` sampai `< 100`.
3. Jika `j > 10`, maka perintah `continue loopi;` akan:
   - **Menghentikan loop `j` saat ini**
   - **Melanjutkan ke iterasi selanjutnya dari loop `i`**

Artinya, hanya nilai `j = 0` sampai `10` yang akan diproses untuk setiap `i`.

### Output

- Akan mencetak:
  ```text
  Perulangan ke-0, 0
  Perulangan ke-0, 1
  ...
  Perulangan ke-0, 10
  Perulangan ke-1, 0
  ...
  Perulangan ke-9, 10
  ```

- Total baris: 10 (i) × 11 (j: 0 sampai 10) = **110 baris output**.

## Kesimpulan

- Label sangat berguna dalam perulangan bersarang untuk kontrol alur `break` atau `continue`.
- Gunakan dengan hati-hati agar tidak membingungkan alur logika program.
- Biasanya digunakan jika tidak memungkinkan refactor ke fungsi terpisah.
