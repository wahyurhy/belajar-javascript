# Penjelasan Konsep Falsy dan Truthy di JavaScript

Kode berikut menunjukkan bagaimana JavaScript menangani nilai **falsy** dan **truthy** dalam sebuah pernyataan kondisional (`if`).

```html
<script>
    let data = "";

    if (data) {
        document.writeln("TRUE");
    } else {
        document.writeln("FALSE");
    }
</script>
```

## Penjelasan

### Baris demi Baris:

1. `let data = "";`  
   - Variabel `data` diisi dengan string kosong (`""`).

2. `if (data)`  
   - JavaScript akan mengevaluasi apakah `data` bernilai **truthy** (benar) atau **falsy** (salah).
   - Dalam JavaScript, string kosong (`""`) termasuk dalam nilai **falsy**.

3. Karena `data` bernilai **falsy**, maka blok `else` yang akan dijalankan.

4. `document.writeln("FALSE");`  
   - Maka output dari kode ini adalah `FALSE` yang ditampilkan di dokumen HTML.

## Nilai-nilai Falsy di JavaScript

Berikut adalah nilai-nilai yang dianggap **falsy** di JavaScript:

- `false`
- `0` (angka nol)
- `-0`
- `""` atau `''` (string kosong)
- `null`
- `undefined`
- `NaN` (Not a Number)

Selain dari daftar di atas, semua nilai lainnya dianggap **truthy**.

## Kesimpulan

Konsep falsy dan truthy sangat penting ketika menggunakan kondisi (`if`, `while`, dll.) dalam JavaScript. Memahami nilai mana yang dianggap "benar" atau "salah" oleh JavaScript membantu dalam menulis logika program yang benar dan efisien.
