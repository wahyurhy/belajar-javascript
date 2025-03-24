# Penjelasan Konversi String dan Number di JavaScript

Kode berikut menjelaskan berbagai cara konversi antara string dan number di JavaScript serta bagaimana JavaScript menangani input yang tidak valid.

```html
<script>
    const value1 = parseInt("1");
    const value2 = 1;

    const sum = value1 + value2;
    document.writeln(`<p>${sum}</p>`);

    document.writeln(`<p>${parseInt("1.6")}</p>`);
    document.writeln(`<p>${parseFloat("1.6")}</p>`);
    document.writeln(`<p>${Number("1.6")}</p>`);

    const a = 1;
    const b = 1;

    const total = a.toString() + b.toString();
    document.writeln(`<p>${total}</p>`);

    document.writeln(`<p>${parseInt("1salah")}</p>`);
    document.writeln(`<p>${parseFloat("1.6wahyu")}</p>`);

    document.writeln(`<p>${Number("1salah")}</p>`);
    document.writeln(`<p>${Number("1.6wahyu")}</p>`);
    document.writeln(`<p>${Number("salah")}</p>`);
    
    const first = Number("Salah"); // NaN
    const totalNumber = first + 100;
    document.writeln(`<p>${totalNumber}</p>`);
    document.writeln(`<p>${isNaN(first)}</p>`);
    document.writeln(`<p>${isNaN(100)}</p>`);
    document.writeln(`<p>${isNaN(NaN)}</p>`);
</script>
```

## Penjelasan

### 1. Konversi String ke Number

- `parseInt("1")` menghasilkan angka `1`.
- `parseInt("1.6")` menghasilkan `1`, karena hanya mengambil bagian integer.
- `parseFloat("1.6")` menghasilkan `1.6`.
- `Number("1.6")` juga menghasilkan `1.6`.

### 2. Operasi Penjumlahan

- `value1 + value2` = `1 + 1` = `2`.

### 3. Konversi Number ke String

- `a.toString()` dan `b.toString()` mengubah angka menjadi string.
- Penjumlahan string: `"1" + "1"` = `"11"` (bukan penjumlahan angka, tapi penggabungan string).

### 4. Perilaku Saat Input Tidak Valid

- `parseInt("1salah")` → hasil: `1` (hanya angka awal yang diambil).
- `parseFloat("1.6wahyu")` → hasil: `1.6` (mirip dengan parseInt).
- `Number("1salah")` → hasil: `NaN` (karena input tidak bisa dikonversi secara penuh).
- `Number("1.6wahyu")` → hasil: `NaN`.
- `Number("salah")` → hasil: `NaN`.

### 5. NaN (Not a Number)

- `Number("Salah")` menghasilkan `NaN`.
- `NaN + 100` tetap menghasilkan `NaN`.
- `isNaN(first)` → `true`, karena `first` adalah `NaN`.
- `isNaN(100)` → `false`, karena 100 adalah angka valid.
- `isNaN(NaN)` → `true`.

## Kesimpulan

- Gunakan `parseInt()` atau `parseFloat()` untuk konversi longgar dari string ke angka.
- Gunakan `Number()` untuk konversi ketat; input harus berupa angka valid secara penuh.
- Gunakan `toString()` untuk mengubah angka menjadi string.
- Selalu cek `NaN` dengan `isNaN()` jika ada kemungkinan input tidak valid.
